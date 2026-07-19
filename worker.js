import MESSAGES from "./ui-messages.json";
import participantsData from "./participants.json";
import eventsData from "./events.json";
import mappingExplainerPng from "./mapping-explainer.png";

const PARTICIPANTS = participantsData.participants || participantsData;
const EVENTS = eventsData.events || eventsData;
const BUILD = "ux-v6";

const TG = "https://api.telegram.org";
const TZ = "Asia/Yerevan";
const OFFSET = "+04:00";
const DEFAULT_ADMIN_PASSWORD = "bigbrother";

function adminPassword(env) {
  const fromEnv = String(env.ADMIN_PASSWORD || "").trim();
  return fromEnv || DEFAULT_ADMIN_PASSWORD;
}

// ——— Telegram helpers ———
async function tgCall(token, method, body) {
  const res = await fetch(`${TG}/bot${token}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  if (!json.ok) {
    const err = new Error(json.description || "Telegram API error");
    err.tg = json;
    throw err;
  }
  return json.result;
}

function sendMessage(token, chatId, text, keyboard) {
  return tgCall(token, "sendMessage", {
    chat_id: chatId,
    text,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: keyboard ? { inline_keyboard: keyboard } : undefined,
  });
}

function editMessageText(token, chatId, messageId, text, keyboard) {
  let reply_markup;
  if (keyboard === false) reply_markup = { inline_keyboard: [] };
  else if (keyboard) reply_markup = { inline_keyboard: keyboard };
  return tgCall(token, "editMessageText", {
    chat_id: chatId,
    message_id: messageId,
    text,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup,
  });
}

function answerCallbackQuery(token, id, text) {
  return tgCall(token, "answerCallbackQuery", {
    callback_query_id: id,
    text: text || "",
    show_alert: Boolean(text && text.length > 180),
  });
}

function sendPhoto(token, chatId, photo, caption, keyboard) {
  return tgCall(token, "sendPhoto", {
    chat_id: chatId,
    photo,
    caption: caption || "",
    parse_mode: "HTML",
    reply_markup: keyboard ? { inline_keyboard: keyboard } : undefined,
  });
}

function sendVideoNote(token, chatId, fileId) {
  return tgCall(token, "sendVideoNote", { chat_id: chatId, video_note: fileId });
}

function copyMessage(token, fromChatId, messageId, toChatId) {
  return tgCall(token, "copyMessage", {
    chat_id: toChatId,
    from_chat_id: fromChatId,
    message_id: messageId,
  });
}

// ——— Utils ———
function t(key, vars) {
  const bag = MESSAGES.en || {};
  let s = bag[key] || key;
  if (vars && typeof vars === "object") {
    for (const k of Object.keys(vars)) s = s.replaceAll(`{${k}}`, String(vars[k]));
  }
  return s;
}

function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function normTg(u) {
  let s = String(u || "").trim();
  if (s.startsWith("@")) s = s.slice(1);
  return s.toLowerCase();
}

function splitTags(s) {
  return String(s || "")
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

function safeJson(raw, fallback) {
  try {
    const v = JSON.parse(raw || "null");
    return v == null ? fallback : v;
  } catch {
    return fallback;
  }
}

function normalizeTime(timeStr) {
  if (!timeStr) return "00:00:00";
  const s = String(timeStr).trim();
  const m = s.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/);
  if (!m) return "00:00:00";
  return `${m[1].padStart(2, "0")}:${m[2]}:${(m[3] || "00").padStart(2, "0")}`;
}

function eventInstantMs(dateStr, timeStr) {
  const t0 = normalizeTime(timeStr);
  const d = String(dateStr || "").trim();
  if (!d || !t0) return NaN;
  return new Date(`${d}T${t0}${OFFSET}`).getTime();
}

function effectiveEndMs(dateStr, startTimeStr, endStr) {
  const startMs = eventInstantMs(dateStr, startTimeStr);
  if (Number.isNaN(startMs)) return NaN;
  if (!endStr || !String(endStr).trim()) return startMs + 45 * 60 * 1000;
  const endMs = eventInstantMs(dateStr, endStr);
  if (Number.isNaN(endMs) || endMs <= startMs) return startMs + 45 * 60 * 1000;
  return endMs;
}

function ymdInTz(ms = Date.now()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(ms));
}

function addDaysYmd(ymd, days) {
  const [y, m, d] = ymd.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + days));
  return dt.toISOString().slice(0, 10);
}

function formatClock(ms) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: TZ,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date(ms));
  } catch {
    return new Date(ms).toISOString().slice(11, 16);
  }
}

function formatDateShort(ymd) {
  const ms = eventInstantMs(ymd, "12:00");
  try {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: TZ,
      weekday: "short",
      day: "numeric",
      month: "short",
    }).format(new Date(ms));
  } catch {
    return ymd;
  }
}

function clockFromSql(t0) {
  return normalizeTime(t0).slice(0, 5);
}

function rowNav() {
  return [[{ text: t("btnBack"), callback_data: "b" }, { text: t("btnMenu"), callback_data: "m" }]];
}

function isStartCommand(text) {
  const first = String(text || "").trim().split(/\s+/)[0]?.split("@")[0]?.toLowerCase();
  return first === "/start";
}

function isAdminCommand(text) {
  const first = String(text || "").trim().split(/\s+/)[0]?.split("@")[0]?.toLowerCase();
  return first === "/admin";
}

function displayName(p) {
  if (!p) return "?";
  const a = (p.artistic_name || "").trim();
  const n = (p.name || "").trim();
  if (a && n && a.toLowerCase() !== n.toLowerCase()) return `${a} (${n})`;
  return a || n || "?";
}

// ——— Name search (Cmd+F contains) ———
function normalizeName(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[“”"‘’']/g, "")
    .replace(/[^a-z0-9\s\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function personSearchBlob(p) {
  return normalizeName([p.name, p.artistic_name].filter(Boolean).join(" "));
}

function containsMatch(query, p) {
  const q = normalizeName(query);
  if (!q || q.length < 2) return false;
  return personSearchBlob(p).includes(q);
}

function containsScore(query, p) {
  const q = normalizeName(query);
  const name = normalizeName(p.name);
  const art = normalizeName(p.artistic_name);
  if (name === q || art === q) return 0;
  if (name.startsWith(q) || art.startsWith(q)) return 1;
  if ((" " + name + " ").includes(" " + q + " ") || (" " + art + " ").includes(" " + q + " ")) return 2;
  if (name.includes(q) || art.includes(q)) return 3;
  return 4;
}

/** Only people whose name CONTAINS the typed text (like Cmd+F). */
function rankParticipants(people, query, limit = 15) {
  const q = normalizeName(query);
  if (!q) return [];
  const hits = (people || []).filter((p) => containsMatch(query, p));
  hits.sort((a, b) => {
    const sa = containsScore(query, a);
    const sb = containsScore(query, b);
    if (sa !== sb) return sa - sb;
    return displayName(a).localeCompare(displayName(b));
  });
  return hits.slice(0, limit);
}

// ——— DB helpers ———
async function getOrCreateUser(db, from) {
  const tid = Number(from.id);
  let row = await db.prepare("SELECT * FROM users WHERE telegram_id = ?").bind(tid).first();
  if (row) {
    await db
      .prepare(
        `UPDATE users SET username = ?, first_name = ?, updated_at = datetime('now') WHERE id = ?`
      )
      .bind(from.username || null, from.first_name || null, row.id)
      .run();
    row = await db.prepare("SELECT * FROM users WHERE telegram_id = ?").bind(tid).first();
    return row;
  }
  await db
    .prepare(`INSERT INTO users (telegram_id, username, first_name, reg_status) VALUES (?, ?, ?, 'new')`)
    .bind(tid, from.username || null, from.first_name || null)
    .run();
  row = await db.prepare("SELECT * FROM users WHERE telegram_id = ?").bind(tid).first();
  await db
    .prepare(
      `INSERT INTO user_navigation (user_id, stack, updated_at) VALUES (?, '["M"]', datetime('now'))`
    )
    .bind(row.id)
    .run();
  return row;
}

async function setUserState(db, userId, state, data) {
  await db
    .prepare(
      `UPDATE users SET state = ?, state_data = ?, updated_at = datetime('now') WHERE id = ?`
    )
    .bind(state || null, data != null ? JSON.stringify(data) : null, userId)
    .run();
}

async function clearUserState(db, userId) {
  await setUserState(db, userId, null, null);
}

async function navGet(db, userId) {
  const row = await db.prepare("SELECT stack FROM user_navigation WHERE user_id = ?").bind(userId).first();
  const stack = safeJson(row?.stack, ["M"]);
  return Array.isArray(stack) && stack.length ? stack : ["M"];
}

async function navSet(db, userId, stack) {
  await db
    .prepare(
      `INSERT INTO user_navigation (user_id, stack, updated_at) VALUES (?, ?, datetime('now'))
       ON CONFLICT(user_id) DO UPDATE SET stack = excluded.stack, updated_at = datetime('now')`
    )
    .bind(userId, JSON.stringify(stack))
    .run();
}

async function navPush(db, userId, key) {
  const stack = await navGet(db, userId);
  if (stack[stack.length - 1] !== key) stack.push(key);
  await navSet(db, userId, stack);
}

async function navPop(db, userId) {
  const stack = await navGet(db, userId);
  if (stack.length <= 1) {
    await navSet(db, userId, ["M"]);
    return "M";
  }
  stack.pop();
  await navSet(db, userId, stack);
  return stack[stack.length - 1] || "M";
}

async function navResetMenu(db, userId) {
  await navSet(db, userId, ["M"]);
}

async function isAdmin(db, from, env) {
  const tid = Number(from.id);
  const row = await db.prepare("SELECT is_admin FROM users WHERE telegram_id = ?").bind(tid).first();
  return Number(row?.is_admin || 0) === 1;
}

async function setAdminFlag(db, userId, value) {
  await db
    .prepare(`UPDATE users SET is_admin = ?, updated_at = datetime('now') WHERE id = ?`)
    .bind(value ? 1 : 0, userId)
    .run();
}

async function listAdminTelegramIds(db, env) {
  const { results } = await db
    .prepare(`SELECT telegram_id FROM users WHERE is_admin = 1`)
    .all();
  return [...new Set((results || []).map((r) => Number(r.telegram_id)).filter(Boolean))];
}

async function listAdminUsers(db) {
  const { results } = await db
    .prepare(
      `SELECT u.telegram_id, u.username, p.name, p.artistic_name
       FROM users u
       LEFT JOIN participants p ON p.id = u.participant_id
       WHERE u.is_admin = 1
       ORDER BY COALESCE(p.name, u.username, CAST(u.telegram_id AS TEXT)) COLLATE NOCASE`
    )
    .all();
  return results || [];
}

function formatPeopleLines(rows) {
  return (rows || [])
    .map((u) => {
      const name = displayName(u) || u.username || String(u.telegram_id || u.id || "—");
      const un = u.username ? ` @${String(u.username).replace(/^@/, "")}` : "";
      return `• ${name}${un}`;
    })
    .join("\n");
}

function formatSentReport(headline, people) {
  return [
    escapeHtml(headline),
    "",
    `<b>${escapeHtml(t("adminSentToTitle"))}</b>`,
    escapeHtml(formatPeopleLines(people) || "—"),
  ].join("\n");
}

async function getParticipant(db, id) {
  return db.prepare("SELECT * FROM participants WHERE id = ?").bind(id).first();
}

async function getUserParticipant(db, user) {
  if (!user.participant_id) return null;
  return getParticipant(db, user.participant_id);
}

async function allParticipants(db) {
  try {
    const { results } = await db.prepare("SELECT * FROM participants ORDER BY name COLLATE NOCASE").all();
    if (results && results.length) return results;
  } catch (e) {
    console.error("allParticipants D1", e);
  }
  return PARTICIPANTS;
}

async function ensureParticipantInDb(db, p) {
  if (!p) return null;
  await db
    .prepare(
      `INSERT INTO participants (
         id, name, artistic_name, photo_url, role, projects, country, social_media,
         telegram, telegram_norm, email, project, discipline, tools, skill_set
       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET
         name = excluded.name,
         artistic_name = excluded.artistic_name,
         photo_url = excluded.photo_url,
         role = excluded.role,
         projects = excluded.projects,
         country = excluded.country,
         social_media = excluded.social_media,
         telegram = excluded.telegram,
         telegram_norm = excluded.telegram_norm,
         email = excluded.email,
         project = excluded.project,
         discipline = excluded.discipline,
         tools = excluded.tools,
         skill_set = excluded.skill_set`
    )
    .bind(
      p.id,
      p.name || "",
      p.artistic_name || null,
      p.photo_url || null,
      p.role || null,
      p.projects || null,
      p.country || null,
      p.social_media || null,
      p.telegram || null,
      p.telegram_norm || null,
      p.email || null,
      p.project || null,
      p.discipline || null,
      p.tools || null,
      p.skill_set || null
    )
    .run();
  return db.prepare("SELECT * FROM participants WHERE id = ?").bind(p.id).first();
}

async function tryLinkParticipant(db, user, participant) {
  const tid = Number(user.telegram_id);
  const pid = Number(participant.id);

  // Already linked to this same participant — idempotent reuse
  if (Number(user.participant_id || 0) === pid && Number(participant.linked_telegram_id || 0) === tid) {
    await db
      .prepare(
        `UPDATE users SET participant_id = ?, reg_status = 'registered', state = NULL, state_data = NULL, updated_at = datetime('now') WHERE id = ?`
      )
      .bind(pid, user.id)
      .run();
    return { ok: true };
  }

  // Participant claimed by a different Telegram account
  if (participant.linked_telegram_id && Number(participant.linked_telegram_id) !== tid) {
    return { ok: false, reason: "already_linked" };
  }

  // If this Telegram user was linked to another participant, unlink that one
  if (user.participant_id && Number(user.participant_id) !== pid) {
    await db
      .prepare(
        `UPDATE participants SET linked_telegram_id = NULL WHERE id = ? AND linked_telegram_id = ?`
      )
      .bind(user.participant_id, tid)
      .run();
  }

  await db
    .prepare(`UPDATE participants SET linked_telegram_id = ? WHERE id = ?`)
    .bind(tid, pid)
    .run();
  await db
    .prepare(
      `UPDATE users SET participant_id = ?, reg_status = 'registered', state = NULL, state_data = NULL, updated_at = datetime('now') WHERE id = ?`
    )
    .bind(pid, user.id)
    .run();
  return { ok: true };
}

async function findByTelegramUsername(db, username) {
  const n = normTg(username);
  if (!n) return null;
  return db.prepare("SELECT * FROM participants WHERE telegram_norm = ?").bind(n).first();
}

// ——— UI renderers ———
function mainMenuKeyboard(admin) {
  const rows = [
    [{ text: t("btnSchedule"), callback_data: "s" }],
    [{ text: t("btnFindCollaborator"), callback_data: "c" }],
    [{ text: t("btnShare"), callback_data: "share" }],
    [{ text: t("btnInfo"), callback_data: "i" }, { text: t("btnHelp"), callback_data: "h" }],
  ];
  if (admin) rows.push([{ text: t("btnAdmin"), callback_data: "a" }]);
  return rows;
}

async function renderMainMenu(admin) {
  return {
    text: `<b>${escapeHtml(t("mainMenuTitle"))}</b>`,
    keyboard: mainMenuKeyboard(admin),
  };
}

async function renderScheduleMenu() {
  return {
    text: `<b>${escapeHtml(t("btnSchedule"))}</b>`,
    keyboard: [
      [{ text: t("btnToday"), callback_data: "s:td" }, { text: t("btnTomorrow"), callback_data: "s:tm" }],
      [{ text: t("btnFullSchedule"), callback_data: "s:full" }],
      [{ text: t("btnNow"), callback_data: "s:now" }, { text: t("btnNext"), callback_data: "s:next" }],
      [{ text: t("btnMine"), callback_data: "s:mine" }],
      [{ text: t("btnVenues"), callback_data: "s:venues" }],
      ...rowNav(),
    ],
  };
}

function eventButtonLabel(ev) {
  const time = clockFromSql(ev.start_time);
  const title = String(ev.title || "").slice(0, 40);
  return `${time} · ${title}`.slice(0, 64);
}

async function listEventsByDate(db, ymd) {
  try {
    const { results } = await db
      .prepare(
        `SELECT * FROM events WHERE status = 'active' AND date = ? ORDER BY start_time, id`
      )
      .bind(ymd)
      .all();
    if (results && results.length) return results;
  } catch (e) {
    console.error("listEventsByDate", e);
  }
  return (EVENTS || [])
    .filter((e) => e.status === "active" && e.date === ymd)
    .sort((a, b) => String(a.start_time).localeCompare(String(b.start_time)) || a.id - b.id);
}

async function listAllActiveEvents(db) {
  try {
    const { results } = await db
      .prepare(`SELECT * FROM events WHERE status = 'active' ORDER BY date, start_time, id`)
      .all();
    if (results && results.length) return results;
  } catch (e) {
    console.error("listAllActiveEvents", e);
  }
  return (EVENTS || [])
    .filter((e) => e.status === "active")
    .sort(
      (a, b) =>
        String(a.date).localeCompare(String(b.date)) ||
        String(a.start_time).localeCompare(String(b.start_time)) ||
        a.id - b.id
    );
}

async function getEventById(db, id) {
  try {
    const row = await db.prepare("SELECT * FROM events WHERE id = ?").bind(id).first();
    if (row) return row;
  } catch {}
  return (EVENTS || []).find((e) => Number(e.id) === Number(id)) || null;
}

function listVenues() {
  const set = new Set();
  for (const e of EVENTS || []) {
    if (e.location) set.add(String(e.location).trim());
  }
  return [...set].filter(Boolean).sort((a, b) => a.localeCompare(b));
}

async function renderVenues() {
  const venues = listVenues();
  if (!venues.length) {
    return { text: `<b>${escapeHtml(t("venuesTitle"))}</b>

${escapeHtml(t("noEvents"))}`, keyboard: rowNav() };
  }
  const body = venues.map((v, i) => `${i + 1}. ${v}`).join("\n");
  return {
    text: `<b>${escapeHtml(t("venuesTitle"))}</b>

${escapeHtml(body)}`,
    keyboard: rowNav(),
  };
}

async function regCount(db, eventId) {
  const row = await db
    .prepare(`SELECT COUNT(*) AS n FROM registrations WHERE event_id = ? AND status = 'registered'`)
    .bind(eventId)
    .first();
  return Number(row?.n || 0);
}

async function userRegStatus(db, userId, eventId) {
  const row = await db
    .prepare(`SELECT status FROM registrations WHERE user_id = ? AND event_id = ?`)
    .bind(userId, eventId)
    .first();
  return row?.status || null;
}

async function renderEventList(db, title, events) {
  if (!events.length) {
    return { text: `<b>${escapeHtml(title)}</b>\n\n${escapeHtml(t("noEvents"))}`, keyboard: rowNav() };
  }
  const kb = [];
  let lastDate = null;
  for (const ev of events.slice(0, 40)) {
    if (ev.date !== lastDate && events.length > 15) {
      // group label as disabled-looking button (callback noop)
      kb.push([{ text: `— ${formatDateShort(ev.date)} —`, callback_data: "noop" }]);
      lastDate = ev.date;
    }
    kb.push([{ text: eventButtonLabel(ev), callback_data: `e:${ev.id}` }]);
  }
  kb.push(...rowNav());
  return { text: `<b>${escapeHtml(title)}</b>`, keyboard: kb };
}

async function renderEventCard(db, user, ev, isAdminUser) {
  if (!ev || ev.status === "cancelled") {
    return { text: escapeHtml(t("noEvents")), keyboard: rowNav() };
  }
  const start = clockFromSql(ev.start_time);
  const end = clockFromSql(ev.end_time);
  const lines = [
    `<b>${escapeHtml(ev.title)}</b>`,
    escapeHtml(formatDateShort(ev.date)),
    escapeHtml(t("timeRange", { start, end })),
  ];
  if (ev.location) lines.push(escapeHtml(t("location", { loc: ev.location })));
  if (ev.category) lines.push(escapeHtml(t("tag", { cat: ev.category })));
  if (ev.speakers) lines.push(escapeHtml(t("performers", { txt: ev.speakers })));
  lines.push("");
  lines.push(escapeHtml(ev.description || t("noDescription")));

  if (isAdminUser) {
    const n = await regCount(db, ev.id);
    lines.push("");
    lines.push(`<i>${escapeHtml(t("adminEventRegCount", { n }))}</i>`);
  }

  const status = await userRegStatus(db, user.id, ev.id);
  const kb = [];
  if (status === "registered") {
    lines.push("");
    lines.push(escapeHtml(t("registered")));
    kb.push([{ text: t("btnCancelReg"), callback_data: `x:${ev.id}` }]);
  } else {
    kb.push([{ text: t("btnRegister"), callback_data: `r:${ev.id}` }]);
  }
  kb.push(...rowNav());
  return { text: lines.join("\n"), keyboard: kb };
}

async function renderMySchedule(db, user) {
  const { results } = await db
    .prepare(
      `SELECT e.* FROM registrations r
       JOIN events e ON e.id = r.event_id
       WHERE r.user_id = ? AND r.status = 'registered' AND e.status = 'active'
       ORDER BY e.date, e.start_time`
    )
    .bind(user.id)
    .all();
  const events = results || [];
  if (!events.length) {
    return { text: `<b>${escapeHtml(t("myScheduleTitle"))}</b>\n\n${escapeHtml(t("myScheduleEmpty"))}`, keyboard: rowNav() };
  }
  return renderEventList(db, t("myScheduleTitle"), events);
}

async function renderNowNext(db, mode) {
  const now = Date.now();
  const events = await listAllActiveEvents(db);
  if (mode === "now") {
    const live = events.filter((ev) => {
      const a = eventInstantMs(ev.date, ev.start_time);
      const b = effectiveEndMs(ev.date, ev.start_time, ev.end_time);
      return a <= now && now < b;
    });
    if (!live.length) {
      return { text: `<b>${escapeHtml(t("nowTitle"))}</b>\n\n${escapeHtml(t("nowEmpty"))}`, keyboard: rowNav() };
    }
    return renderEventList(db, t("nowTitle"), live);
  }
  const upcoming = events
    .filter((ev) => eventInstantMs(ev.date, ev.start_time) > now)
    .slice(0, 3);
  if (!upcoming.length) {
    return { text: `<b>${escapeHtml(t("nextTitle"))}</b>\n\n${escapeHtml(t("nextEmpty"))}`, keyboard: rowNav() };
  }
  return renderEventList(db, t("nextTitle"), upcoming);
}

async function renderFullScheduleDays(db) {
  const events = await listAllActiveEvents(db);
  const days = [...new Set(events.map((e) => e.date))];
  if (!days.length) {
    return { text: escapeHtml(t("noEvents")), keyboard: rowNav() };
  }
  const kb = days.map((d) => [{ text: formatDateShort(d), callback_data: `s:d:${d}` }]);
  kb.push(...rowNav());
  return { text: `<b>${escapeHtml(t("btnFullSchedule"))}</b>\n\n${escapeHtml(t("pickDay"))}`, keyboard: kb };
}

// ——— Collaborator ———
function parseFilters(user) {
  return safeJson(user.state_data, { filters: {} }).filters || safeJson(user.state_data, {}).filters || {};
}

async function getCollabState(db, user) {
  const data = safeJson(user.state_data, {});
  return {
    filters: data.filters || {},
    results: data.results || [],
  };
}

async function saveCollabState(db, userId, data) {
  await setUserState(db, userId, "collab", data);
}

function participantMatchesFilters(p, filters) {
  const entries = Object.entries(filters || {});
  if (!entries.length) return true;
  for (const [kind, values] of entries) {
    if (!values || !values.length) continue;
    let field = "";
    if (kind === "project") field = p.project;
    else if (kind === "discipline") field = p.discipline;
    else if (kind === "tools") field = p.tools;
    else if (kind === "skill") field = p.skill_set;
    else if (kind === "role") field = p.role;
    else if (kind === "country") field = p.country;
    else continue;
    const tags = splitTags(field).map((x) => x.toLowerCase());
    // country/role may be single value without commas
    if (!tags.length && field) tags.push(String(field).toLowerCase());
    const ok = values.some((v) => tags.includes(String(v).toLowerCase()));
    if (!ok) return false;
  }
  return true;
}

function collectTagValues(people, kind) {
  const set = new Set();
  for (const p of people) {
    let field = "";
    if (kind === "project") field = p.project;
    else if (kind === "discipline") field = p.discipline;
    else if (kind === "tools") field = p.tools;
    else if (kind === "skill") field = p.skill_set;
    else if (kind === "role") field = p.role;
    else if (kind === "country") field = p.country;
    for (const v of splitTags(field)) set.add(v);
    if (kind === "country" || kind === "role") {
      if (field && !String(field).includes(",")) set.add(String(field).trim());
    }
  }
  return [...set].filter(Boolean).sort((a, b) => a.localeCompare(b));
}

function filtersSummary(filters) {
  const parts = [];
  for (const [k, vals] of Object.entries(filters || {})) {
    if (vals?.length) parts.push(`${k}: ${vals.join(", ")}`);
  }
  return parts.join("\n") || "—";
}

function renderCollabHome(filters) {
  const summary = filtersSummary(filters);
  return {
    text: `<b>${escapeHtml(t("collabTitle"))}</b>\n\n${escapeHtml(t("collabPrompt"))}\n\n<b>${escapeHtml(t("collabFiltersActive"))}</b>\n${escapeHtml(summary)}`,
    keyboard: [
      [{ text: t("btnSearchByName"), callback_data: "c:n" }],
      [{ text: t("btnFilterTags"), callback_data: "c:f" }],
      [{ text: t("btnClearFilters"), callback_data: "c:cl" }],
      [{ text: t("collabShowResults"), callback_data: "c:go" }],
      ...rowNav(),
    ],
  };
}

function renderPersonCardText(p) {
  const lines = [`<b>${escapeHtml(displayName(p))}</b>`];
  if (p.artistic_name && p.name && p.artistic_name.toLowerCase() !== p.name.toLowerCase()) {
    lines.push(`${escapeHtml(t("labelRealName"))}: ${escapeHtml(p.name)}`);
  }
  if (p.country) lines.push(`${escapeHtml(t("labelCountry"))}: ${escapeHtml(p.country)}`);
  if (p.project) lines.push(`${escapeHtml(t("labelProject"))}: ${escapeHtml(p.project)}`);
  if (p.discipline) lines.push(`${escapeHtml(t("labelDiscipline"))}: ${escapeHtml(p.discipline)}`);
  if (p.tools) lines.push(`${escapeHtml(t("labelTools"))}: ${escapeHtml(p.tools)}`);
  if (p.skill_set) lines.push(`${escapeHtml(t("labelSkillSet"))}: ${escapeHtml(p.skill_set)}`);
  if (p.role) lines.push(`${escapeHtml(t("labelRole"))}: ${escapeHtml(p.role)}`);
  if (p.social_media) lines.push(`${escapeHtml(t("labelSocial"))}: ${escapeHtml(p.social_media)}`);
  return lines.join("\n");
}

function connectUrl(p) {
  const u = normTg(p.telegram);
  if (u) return `https://t.me/${u}`;
  return null;
}

// ——— Admin menus ———
function renderAdminMenu() {
  return {
    text: `<b>${escapeHtml(t("adminMenuTitle"))}</b>`,
    keyboard: [
      [{ text: t("btnAdminParticipants"), callback_data: "a:p" }],
      [{ text: t("btnAdminCircles"), callback_data: "a:c" }],
      [{ text: t("btnAdminNotifications"), callback_data: "a:n" }],
      [{ text: t("btnAdminSchedule"), callback_data: "a:s" }],
      [{ text: t("btnAdminList"), callback_data: "a:admins" }],
      ...rowNav(),
    ],
  };
}

async function replyOrEdit(token, chatId, messageId, payload) {
  // Always send a NEW message so previous bot messages stay visible in chat.
  await sendMessage(token, chatId, payload.text, payload.keyboard);
}

async function showScreen(token, db, user, chatId, messageId, screenKey, payload) {
  if (screenKey) await navPush(db, user.id, screenKey);
  await replyOrEdit(token, chatId, messageId, payload);
}

// ——— Registration flow ———
async function startRegistration(token, db, user, chatId) {
  await setUserState(db, user.id, "awaiting_name", {});
  await db
    .prepare(`UPDATE users SET reg_status = 'awaiting_name', updated_at = datetime('now') WHERE id = ?`)
    .bind(user.id)
    .run();
  await sendMessage(token, chatId, escapeHtml(t("welcome")) + "\n\n" + escapeHtml(t("regNamePrompt")));
}

async function offerParticipantChoices(token, chatId, people, headerKey) {
  const list = people || [];
  if (!list.length) {
    await sendMessage(token, chatId, escapeHtml(t("regNoMatches")), [
      [{ text: t("btnContactUliana"), url: "https://t.me/junully" }],
    ]);
    return;
  }
  const kb = list.map((p) => [
    { text: displayName(p).slice(0, 64), callback_data: `reg:pick:${p.id}` },
  ]);
  kb.push([{ text: t("btnNoneOfThese"), callback_data: "reg:none" }]);
  await sendMessage(token, chatId, `<b>${escapeHtml(t(headerKey))}</b>`, kb);
}

async function finishLink(token, db, env, user, chatId, participant) {
  const res = await tryLinkParticipant(db, user, participant);
  if (!res.ok) {
    await sendMessage(token, chatId, escapeHtml(t("regAlreadyLinked")));
    return;
  }
  await clearUserState(db, user.id);
  await navResetMenu(db, user.id);
  const admin = await isAdmin(db, { id: user.telegram_id, username: user.username }, env);
  // notify admins
  const adminIds = await listAdminTelegramIds(db, env);
  const name = displayName(participant);
  for (const aid of adminIds) {
    if (Number(aid) === Number(user.telegram_id)) continue;
    try {
      await sendMessage(
        token,
        aid,
        t("regNotifyAdmin", { name: escapeHtml(name), username: escapeHtml(user.username || "—"), id: user.telegram_id })
      );
    } catch {}
  }
  const menu = await renderMainMenu(admin);
  await sendMessage(token, chatId, escapeHtml(t("regLinkedOk")), menu.keyboard);
}

async function notFoundInDatabase(token, db, user, chatId) {
  await clearUserState(db, user.id);
  await sendMessage(token, chatId, escapeHtml(t("regNoMatches")), [
    [{ text: t("btnContactUliana"), url: "https://t.me/junully" }],
  ]);
}

// ——— Circles ———
async function activeCircleTarget(db, userId) {
  return db
    .prepare(
      `SELECT ct.*, cc.prompt, cc.id AS campaign_id
       FROM circle_targets ct
       JOIN circle_campaigns cc ON cc.id = ct.campaign_id
       WHERE ct.user_id = ? AND ct.status = 'pending'
       ORDER BY cc.created_at DESC LIMIT 1`
    )
    .bind(userId)
    .first();
}

async function sendCircleRequests(token, db, env, campaignId, userIds, prompt) {
  let sent = 0;
  const delivered = [];
  for (const uid of userIds) {
    const u = await db
      .prepare(
        `SELECT u.*, p.name, p.artistic_name FROM users u
         LEFT JOIN participants p ON p.id = u.participant_id
         WHERE u.id = ?`
      )
      .bind(uid)
      .first();
    if (!u) continue;
    try {
      await sendMessage(
        token,
        u.telegram_id,
        `<b>${escapeHtml(t("circleRequestTitle"))}</b>\n\n${escapeHtml(prompt || t("circleRequestBody"))}`
      );
      sent++;
      delivered.push(u);
    } catch {}
  }
  return { sent, delivered };
}

async function resolveAudienceUserIds(db, audienceType, audienceJson) {
  const data = typeof audienceJson === "string" ? safeJson(audienceJson, {}) : audienceJson || {};
  const { results: registered } = await db
    .prepare(`SELECT * FROM users WHERE reg_status = 'registered' AND participant_id IS NOT NULL`)
    .all();
  let users = registered || [];

  if (audienceType === "all") return users.map((u) => u.id);

  if (audienceType === "random") {
    const n = Math.max(1, Number(data.n || 1));
    const shuffled = [...users].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n).map((u) => u.id);
  }

  if (audienceType === "selected") {
    const ids = new Set((data.userIds || []).map(Number));
    return users.filter((u) => ids.has(u.id)).map((u) => u.id);
  }

  return users.map((u) => u.id);
}

// ——— Broadcast ———
async function registeredRecipients(db) {
  const { results } = await db
    .prepare(
      `SELECT u.*, p.name, p.artistic_name FROM users u
       LEFT JOIN participants p ON p.id = u.participant_id
       WHERE u.reg_status = 'registered'`
    )
    .all();
  return results || [];
}

async function runBroadcast(token, db, broadcastId) {
  const b = await db.prepare("SELECT * FROM broadcasts WHERE id = ?").bind(broadcastId).first();
  if (!b) return;
  if (b.status === "sent") return { already: true };
  await db.prepare(`UPDATE broadcasts SET status = 'sending' WHERE id = ?`).bind(broadcastId).run();
  const recipients = await registeredRecipients(db);
  let ok = 0;
  const delivered = [];
  for (const u of recipients) {
    try {
      await sendMessage(token, u.telegram_id, escapeHtml(b.body_text));
      ok++;
      delivered.push(u);
    } catch {}
    // light pacing
    if (ok % 25 === 0) await new Promise((r) => setTimeout(r, 300));
  }
  await db
    .prepare(
      `UPDATE broadcasts SET status = 'sent', recipient_count = ?, sent_at = datetime('now') WHERE id = ?`
    )
    .bind(ok, broadcastId)
    .run();
  return { ok, total: recipients.length, delivered };
}

// ——— Screen router for back stack ———
async function renderByKey(db, user, key, env, from) {
  const admin = await isAdmin(db, from, env);
  if (key === "M") return renderMainMenu(admin);
  if (key === "S") return renderScheduleMenu();
  if (key === "A") return renderAdminMenu();
  if (key === "C") {
    const data = safeJson(user.state_data, {});
    return renderCollabHome(data.filters || {});
  }
  if (key === "I") {
    return { text: escapeHtml(t("infoBody")), keyboard: rowNav() };
  }
  if (key === "H") {
    return { text: escapeHtml(t("helpBody")), keyboard: rowNav() };
  }
  return renderMainMenu(admin);
}


async function sendMappingExplainer(token, env, chatId) {
  const caption = t("collabMappingCaption");
  const kb = [[{ text: t("btnMappingTool"), url: t("mappingToolUrl") }], ...rowNav()];
  try {
    if (mappingExplainerPng) {
      const form = new FormData();
      form.append("chat_id", String(chatId));
      form.append("photo", new Blob([mappingExplainerPng], { type: "image/png" }), "mapping-explainer.png");
      form.append("caption", caption);
      form.append("parse_mode", "HTML");
      form.append("reply_markup", JSON.stringify({ inline_keyboard: kb }));
      const res = await fetch(`${TG}/bot${token}/sendPhoto`, { method: "POST", body: form });
      const json = await res.json().catch(() => ({}));
      if (json.ok) return;
      console.error("sendPhoto multipart", json);
    }
    if (env.MAP_EXPLAINER_URL) {
      await tgCall(token, "sendPhoto", {
        chat_id: chatId,
        photo: env.MAP_EXPLAINER_URL,
        caption,
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: kb },
      });
      return;
    }
  } catch (e) {
    console.error("sendMappingExplainer", e);
  }
  await sendMessage(token, chatId, escapeHtml(caption), kb);
}

async function forwardShareToAdmins(token, db, env, user, from, msg) {
  const p = await getUserParticipant(db, user);
  const when = new Intl.DateTimeFormat("en-GB", {
    timeZone: TZ,
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());

  let mediaType = t("mediaTypeText");
  if (msg.video_note) mediaType = t("mediaTypeVideoNote");
  else if (msg.voice) mediaType = t("mediaTypeVoice");
  else if (msg.video) mediaType = t("mediaTypeVideo");
  else if (msg.photo) mediaType = t("mediaTypePhoto");
  else if (msg.document) mediaType = t("mediaTypeDocument");
  else if (msg.audio) mediaType = t("mediaTypeAudio");

  const lines = [
    t("shareAdminHeader"),
    t("shareAdminName", { name: displayName(p) || from.first_name || "—" }),
  ];
  if (p?.artistic_name && p.artistic_name !== p.name) {
    lines.push(t("shareAdminArtistic", { name: p.artistic_name }));
  }
  lines.push(t("shareAdminTelegram", { username: from.username || "—" }));
  lines.push(t("shareAdminUserId", { id: from.id }));
  lines.push(t("shareAdminWhen", { when, tz: TZ }));
  lines.push(t("shareAdminType", { type: mediaType }));

  const adminIds = await listAdminTelegramIds(db, env);
  for (const aid of adminIds) {
    try {
      await sendMessage(token, aid, escapeHtml(lines.join("\n")));
      await tgCall(token, "copyMessage", {
        chat_id: aid,
        from_chat_id: msg.chat.id,
        message_id: msg.message_id,
      });
    } catch (e) {
      console.error("forward share", e);
    }
  }
}

// ——— Callback handler ———
async function handleCallback(token, db, env, cq) {
  const data = String(cq.data || "");
  const from = cq.from;
  const chatId = cq.message?.chat?.id;
  const messageId = cq.message?.message_id;
  let user = await getOrCreateUser(db, from);
  const admin = await isAdmin(db, from, env);

  if (data === "noop") {
    await answerCallbackQuery(token, cq.id);
    return;
  }

  // Registration picks allowed before registered
  if (data.startsWith("reg:")) {
    await answerCallbackQuery(token, cq.id);
    if (data === "reg:none") {
      await notFoundInDatabase(token, db, user, chatId);
      return;
    }
    if (data === "reg:again") {
      await startRegistration(token, db, user, chatId);
      return;
    }
    const m = /^reg:pick:(\d+)$/.exec(data);
    if (m) {
      const pid = Number(m[1]);
      let p = await getParticipant(db, pid);
      if (!p) {
        const embedded = PARTICIPANTS.find((x) => Number(x.id) === pid);
        p = embedded ? await ensureParticipantInDb(db, embedded) : null;
      }
      if (!p) {
        await sendMessage(token, chatId, escapeHtml(t("regNotFoundFinal")));
        return;
      }
      // Instant registration — no profile confirmation step
      await finishLink(token, db, env, user, chatId, p);
      return;
    }
    return;
  }

  if (user.reg_status !== "registered" && !admin) {
    await answerCallbackQuery(token, cq.id, t("finishRegFirst"));
    await startRegistration(token, db, user, chatId);
    return;
  }

  // refresh user after possible link
  user = await db.prepare("SELECT * FROM users WHERE id = ?").bind(user.id).first();

  if (data === "m") {
    await answerCallbackQuery(token, cq.id);
    await navResetMenu(db, user.id);
    await clearUserState(db, user.id);
    const payload = await renderMainMenu(admin);
    await replyOrEdit(token, chatId, messageId, payload);
    return;
  }

  if (data === "b") {
    await answerCallbackQuery(token, cq.id);
    const prev = await navPop(db, user.id);
    user = await db.prepare("SELECT * FROM users WHERE id = ?").bind(user.id).first();
    const payload = await renderByKey(db, user, prev, env, from);
    await replyOrEdit(token, chatId, messageId, payload);
    return;
  }

  // Schedule
  if (data === "s") {
    await answerCallbackQuery(token, cq.id);
    await navPush(db, user.id, "S");
    await replyOrEdit(token, chatId, messageId, await renderScheduleMenu());
    return;
  }
  if (data === "s:td" || data === "s:tm") {
    await answerCallbackQuery(token, cq.id);
    const ymd = data === "s:td" ? ymdInTz() : addDaysYmd(ymdInTz(), 1);
    const events = await listEventsByDate(db, ymd);
    const title = data === "s:td" ? t("btnToday") : t("btnTomorrow");
    await replyOrEdit(token, chatId, messageId, await renderEventList(db, `${title} · ${formatDateShort(ymd)}`, events));
    return;
  }
  if (data === "s:full") {
    await answerCallbackQuery(token, cq.id);
    await replyOrEdit(token, chatId, messageId, await renderFullScheduleDays(db));
    return;
  }
  if (data.startsWith("s:d:")) {
    await answerCallbackQuery(token, cq.id);
    const ymd = data.slice(4);
    const events = await listEventsByDate(db, ymd);
    await replyOrEdit(token, chatId, messageId, await renderEventList(db, formatDateShort(ymd), events));
    return;
  }
  if (data === "s:now" || data === "s:next") {
    await answerCallbackQuery(token, cq.id);
    await replyOrEdit(token, chatId, messageId, await renderNowNext(db, data === "s:now" ? "now" : "next"));
    return;
  }
  if (data === "s:mine") {
    await answerCallbackQuery(token, cq.id);
    await replyOrEdit(token, chatId, messageId, await renderMySchedule(db, user));
    return;
  }
  if (data === "s:venues") {
    await answerCallbackQuery(token, cq.id);
    await replyOrEdit(token, chatId, messageId, await renderVenues());
    return;
  }

  if (data.startsWith("e:")) {
    await answerCallbackQuery(token, cq.id);
    const id = Number(data.slice(2));
    const ev = await getEventById(db, id);
    await replyOrEdit(token, chatId, messageId, await renderEventCard(db, user, ev, admin));
    return;
  }

  if (data.startsWith("r:")) {
    const id = Number(data.slice(2));
    await db
      .prepare(
        `INSERT INTO registrations (user_id, event_id, status) VALUES (?, ?, 'registered')
         ON CONFLICT(user_id, event_id) DO UPDATE SET status = 'registered', updated_at = datetime('now')`
      )
      .bind(user.id, id)
      .run();
    await answerCallbackQuery(token, cq.id, t("registerOk"));
    const ev = await getEventById(db, id);
    await replyOrEdit(token, chatId, messageId, await renderEventCard(db, user, ev, admin));
    return;
  }

  if (data.startsWith("x:")) {
    const id = Number(data.slice(2));
    await db
      .prepare(
        `UPDATE registrations SET status = 'cancelled', updated_at = datetime('now') WHERE user_id = ? AND event_id = ?`
      )
      .bind(user.id, id)
      .run();
    await answerCallbackQuery(token, cq.id, t("cancelOk"));
    const ev = await getEventById(db, id);
    await replyOrEdit(token, chatId, messageId, await renderEventCard(db, user, ev, admin));
    return;
  }

  if (data === "i") {
    await answerCallbackQuery(token, cq.id);
    await navPush(db, user.id, "I");
    await replyOrEdit(token, chatId, messageId, { text: escapeHtml(t("infoBody")), keyboard: rowNav() });
    return;
  }
  if (data === "h") {
    await answerCallbackQuery(token, cq.id);
    await navPush(db, user.id, "H");
    await replyOrEdit(token, chatId, messageId, { text: escapeHtml(t("helpBody")), keyboard: rowNav() });
    return;
  }

  // I want to share
  if (data === "share") {
    await answerCallbackQuery(token, cq.id);
    await setUserState(db, user.id, "awaiting_share", {});
    await replyOrEdit(token, chatId, messageId, {
      text: escapeHtml(t("sharePrompt")),
      keyboard: rowNav(),
    });
    return;
  }

  // Find collaborator → Community Mapping
  if (data === "c" || data.startsWith("c:")) {
    await answerCallbackQuery(token, cq.id);
    await sendMappingExplainer(token, env, chatId);
    return;
  }

  if (data === "c:cl") {
    await answerCallbackQuery(token, cq.id);
    await saveCollabState(db, user.id, { filters: {} });
    await replyOrEdit(token, chatId, messageId, renderCollabHome({}));
    return;
  }
  if (data === "c:n") {
    await answerCallbackQuery(token, cq.id);
    const st = safeJson(user.state_data, { filters: {} });
    await setUserState(db, user.id, "awaiting_collab_name", st);
    await replyOrEdit(token, chatId, messageId, {
      text: escapeHtml(t("collabNamePrompt")),
      keyboard: rowNav(),
    });
    return;
  }
  if (data === "c:f") {
    await answerCallbackQuery(token, cq.id);
    const kb = [
      [{ text: t("filterProject"), callback_data: "c:ft:project" }],
      [{ text: t("filterDiscipline"), callback_data: "c:ft:discipline" }],
      [{ text: t("filterTools"), callback_data: "c:ft:tools" }],
      [{ text: t("filterSkill"), callback_data: "c:ft:skill" }],
      [{ text: t("filterRole"), callback_data: "c:ft:role" }],
      [{ text: t("filterCountry"), callback_data: "c:ft:country" }],
      ...rowNav(),
    ];
    await replyOrEdit(token, chatId, messageId, {
      text: escapeHtml(t("collabPickFilterType")),
      keyboard: kb,
    });
    return;
  }
  if (data.startsWith("c:ft:")) {
    await answerCallbackQuery(token, cq.id);
    const kind = data.slice(5);
    const people = await allParticipants(db);
    const values = collectTagValues(people, kind).slice(0, 40);
    const st = safeJson(user.state_data, { filters: {} });
    const selected = new Set((st.filters?.[kind] || []).map((x) => x.toLowerCase()));
    const kb = values.map((v, idx) => {
      const on = selected.has(v.toLowerCase());
      return [{ text: `${on ? "✓ " : ""}${v}`.slice(0, 64), callback_data: `c:tg:${kind}:${idx}` }];
    });
    // store value list in state for idx mapping
    st._tagKind = kind;
    st._tagValues = values;
    await saveCollabState(db, user.id, st);
    kb.push([{ text: t("btnDone"), callback_data: "c" }]);
    kb.push(...rowNav());
    await replyOrEdit(token, chatId, messageId, {
      text: escapeHtml(t("collabPickTag")),
      keyboard: kb,
    });
    return;
  }
  if (data.startsWith("c:tg:")) {
    const parts = data.split(":");
    const kind = parts[2];
    const idx = Number(parts[3]);
    const st = safeJson(user.state_data, { filters: {} });
    const values = st._tagValues || [];
    const val = values[idx];
    if (!val) {
      await answerCallbackQuery(token, cq.id);
      return;
    }
    if (!st.filters) st.filters = {};
    if (!st.filters[kind]) st.filters[kind] = [];
    const i = st.filters[kind].findIndex((x) => x.toLowerCase() === val.toLowerCase());
    if (i >= 0) {
      st.filters[kind].splice(i, 1);
      if (!st.filters[kind].length) delete st.filters[kind];
      await answerCallbackQuery(token, cq.id, t("collabTagOff"));
    } else {
      st.filters[kind].push(val);
      await answerCallbackQuery(token, cq.id, t("collabTagOn"));
    }
    await saveCollabState(db, user.id, st);
    // re-render tag list
    const selected = new Set((st.filters?.[kind] || []).map((x) => x.toLowerCase()));
    const kb = values.map((v, j) => {
      const on = selected.has(v.toLowerCase());
      return [{ text: `${on ? "✓ " : ""}${v}`.slice(0, 64), callback_data: `c:tg:${kind}:${j}` }];
    });
    kb.push([{ text: t("btnDone"), callback_data: "c" }]);
    kb.push(...rowNav());
    await replyOrEdit(token, chatId, messageId, {
      text: escapeHtml(t("collabPickTag")),
      keyboard: kb,
    });
    return;
  }
  if (data === "c:go") {
    await answerCallbackQuery(token, cq.id);
    const st = safeJson(user.state_data, { filters: {} });
    const people = (await allParticipants(db)).filter((p) => participantMatchesFilters(p, st.filters || {}));
    // exclude self
    const filtered = people.filter((p) => p.id !== user.participant_id).slice(0, 30);
    if (!filtered.length) {
      await replyOrEdit(token, chatId, messageId, {
        text: escapeHtml(t("collabNoResults")),
        keyboard: [[{ text: t("btnBack"), callback_data: "c" }], ...rowNav()],
      });
      return;
    }
    const kb = filtered.map((p) => [
      { text: displayName(p).slice(0, 64), callback_data: `c:p:${p.id}` },
    ]);
    kb.push([{ text: t("btnBack"), callback_data: "c" }]);
    kb.push(...rowNav());
    await replyOrEdit(token, chatId, messageId, {
      text: `<b>${escapeHtml(t("collabResultsTitle"))}</b> (${filtered.length})`,
      keyboard: kb,
    });
    return;
  }
  if (data.startsWith("c:p:")) {
    await answerCallbackQuery(token, cq.id);
    const pid = Number(data.slice(4));
    const p = await getParticipant(db, pid);
    if (!p) return;
    const kb = [];
    kb.push([{ text: t("btnConnect"), callback_data: `c:o:${p.id}` }]);
    kb.push([{ text: t("btnBack"), callback_data: "c:go" }]);
    kb.push(...rowNav());
    const caption = renderPersonCardText(p);
    // try photo
    if (p.photo_url && /^https:\/\//i.test(p.photo_url) && !/drive\.google\.com/i.test(p.photo_url)) {
      try {
        await sendPhoto(token, chatId, p.photo_url, caption, kb);
        return;
      } catch {}
    }
    await replyOrEdit(token, chatId, messageId, { text: caption, keyboard: kb });
    return;
  }
  if (data.startsWith("c:o:")) {
    const pid = Number(data.slice(4));
    const p = await getParticipant(db, pid);
    const st = safeJson(user.state_data, {});
    await db
      .prepare(
        `INSERT INTO connects (from_user_id, to_participant_id, filters_json) VALUES (?, ?, ?)`
      )
      .bind(user.id, pid, JSON.stringify(st.filters || {}))
      .run();
    await answerCallbackQuery(token, cq.id, t("connectOpened"));
    const url = connectUrl(p);
    const adminIds = await listAdminTelegramIds(db, env);
    const me = await getUserParticipant(db, user);
    for (const aid of adminIds) {
      try {
        await sendMessage(
          token,
          aid,
          escapeHtml(
            t("adminConnectsLine", {
              name: displayName(me) || user.username || user.telegram_id,
              target: displayName(p),
            })
          ) + `\nFilters: ${escapeHtml(filtersSummary(st.filters || {}))}`
        );
      } catch {}
    }
    if (url) {
      await sendMessage(token, chatId, escapeHtml(t("connectOpened")), [
        [{ text: t("btnConnect"), url }],
      ]);
    } else {
      await sendMessage(token, chatId, escapeHtml(t("connectNoTelegram")));
    }
    return;
  }

  // Admin
  if (data === "a") {
    if (!admin) {
      await answerCallbackQuery(token, cq.id, t("accessDenied"));
      return;
    }
    await answerCallbackQuery(token, cq.id);
    await navPush(db, user.id, "A");
    await replyOrEdit(token, chatId, messageId, renderAdminMenu());
    return;
  }

  if (data.startsWith("a:") && !admin) {
    await answerCallbackQuery(token, cq.id, t("accessDenied"));
    return;
  }

  if (data === "a:p") {
    await answerCallbackQuery(token, cq.id);
    const reg = await db
      .prepare(
        `SELECT COUNT(*) AS n FROM users WHERE reg_status = 'registered'`
      )
      .first();
    const total = await db.prepare(`SELECT COUNT(*) AS n FROM participants`).first();
    const { results } = await db
      .prepare(
        `SELECT u.telegram_id, u.username, p.name, p.artistic_name
         FROM users u JOIN participants p ON p.id = u.participant_id
         WHERE u.reg_status = 'registered'
         ORDER BY p.name COLLATE NOCASE LIMIT 40`
      )
      .all();
    const lines = (results || []).map(
      (r) => `• ${displayName(r)} — @${r.username || "—"}`
    );
    const text = `<b>${escapeHtml(t("adminParticipantsTitle"))}</b>\n\n${escapeHtml(t("adminRegisteredList"))}: ${reg?.n || 0} / ${total?.n || 0}\n\n${escapeHtml(lines.join("\n") || "—")}`;
    const kb = [
      [{ text: t("adminNotRegisteredList"), callback_data: "a:p:nr" }],
      ...rowNav(),
    ];
    await replyOrEdit(token, chatId, messageId, { text, keyboard: kb });
    return;
  }
  if (data === "a:p:nr") {
    await answerCallbackQuery(token, cq.id);
    const { results } = await db
      .prepare(
        `SELECT name, artistic_name, telegram FROM participants
         WHERE linked_telegram_id IS NULL
         ORDER BY name COLLATE NOCASE LIMIT 50`
      )
      .all();
    const lines = (results || []).map((r) => `• ${displayName(r)} (${r.telegram || "no tg"})`);
    await replyOrEdit(token, chatId, messageId, {
      text: `<b>${escapeHtml(t("adminNotRegisteredList"))}</b>\n\n${escapeHtml(lines.join("\n") || "—")}`,
      keyboard: [[{ text: t("btnBack"), callback_data: "a:p" }], ...rowNav()],
    });
    return;
  }

  if (data === "a:n") {
    await answerCallbackQuery(token, cq.id);
    await setUserState(db, user.id, "admin_broadcast_compose", {});
    await replyOrEdit(token, chatId, messageId, {
      text: escapeHtml(t("adminBroadcastComposePrompt")),
      keyboard: [[{ text: t("btnCancel"), callback_data: "a" }], ...rowNav()],
    });
    return;
  }
  if (data.startsWith("a:n:send:")) {
    const id = Number(data.split(":")[3]);
    await answerCallbackQuery(token, cq.id, "Sending…");
    const result = await runBroadcast(token, db, id);
    if (result?.already) {
      await sendMessage(token, chatId, escapeHtml(t("adminBroadcastAlreadySent")));
    } else {
      await sendMessage(
        token,
        chatId,
        formatSentReport(
          `${t("adminBroadcastSentOk")}\n${t("adminBroadcastSentCount", { ok: result?.ok || 0, total: result?.total || 0 })}`,
          result?.delivered || []
        )
      );
    }
    await clearUserState(db, user.id);
    await replyOrEdit(token, chatId, messageId, renderAdminMenu());
    return;
  }
  if (data === "a:n:cancel") {
    await answerCallbackQuery(token, cq.id);
    await clearUserState(db, user.id);
    await replyOrEdit(token, chatId, messageId, renderAdminMenu());
    return;
  }

  // Circles admin
  if (data === "a:c") {
    await answerCallbackQuery(token, cq.id);
    await replyOrEdit(token, chatId, messageId, {
      text: `<b>${escapeHtml(t("adminCircleTitle"))}</b>`,
      keyboard: [
        [{ text: t("btnCircleSendAll"), callback_data: "a:c:all" }],
        [{ text: t("btnCircleSendRandom"), callback_data: "a:c:rand" }],
        [{ text: t("btnCircleViewInbox"), callback_data: "a:c:inbox" }],
        [{ text: t("btnCircleWhoMissing"), callback_data: "a:c:miss" }],
        [{ text: t("btnCircleRemind"), callback_data: "a:c:remind" }],
        ...rowNav(),
      ],
    });
    return;
  }
  if (data === "a:c:all" || data === "a:c:rand") {
    await answerCallbackQuery(token, cq.id);
    const mode = data.split(":")[2];
    await setUserState(db, user.id, "admin_circle_prompt", { mode });
    await replyOrEdit(token, chatId, messageId, {
      text: escapeHtml(t("adminCircleCompose")),
      keyboard: [[{ text: t("btnCancel"), callback_data: "a:c" }], ...rowNav()],
    });
    return;
  }
  if (data === "a:c:inbox") {
    await answerCallbackQuery(token, cq.id);
    const { results } = await db
      .prepare(
        `SELECT cr.*, p.name, p.artistic_name, u.telegram_id
         FROM circle_responses cr
         JOIN users u ON u.id = cr.user_id
         LEFT JOIN participants p ON p.id = u.participant_id
         ORDER BY cr.id DESC LIMIT 20`
      )
      .all();
    if (!results?.length) {
      await replyOrEdit(token, chatId, messageId, {
        text: escapeHtml(t("adminCircleInboxEmpty")),
        keyboard: [[{ text: t("btnBack"), callback_data: "a:c" }], ...rowNav()],
      });
      return;
    }
    await sendMessage(token, chatId, `<b>${escapeHtml(t("btnCircleViewInbox"))}</b>`);
    for (const r of results) {
      try {
        await sendMessage(token, chatId, escapeHtml(t("circleAdminCaption", { name: displayName(r) })));
        await sendVideoNote(token, chatId, r.file_id);
      } catch {}
    }
    return;
  }
  if (data === "a:c:miss" || data === "a:c:remind") {
    await answerCallbackQuery(token, cq.id);
    const camp = await db
      .prepare(`SELECT * FROM circle_campaigns ORDER BY id DESC LIMIT 1`)
      .first();
    if (!camp) {
      await replyOrEdit(token, chatId, messageId, {
        text: escapeHtml(t("adminCircleInboxEmpty")),
        keyboard: [[{ text: t("btnBack"), callback_data: "a:c" }], ...rowNav()],
      });
      return;
    }
    const { results } = await db
      .prepare(
        `SELECT u.*, p.name, p.artistic_name FROM circle_targets ct
         JOIN users u ON u.id = ct.user_id
         LEFT JOIN participants p ON p.id = u.participant_id
         WHERE ct.campaign_id = ? AND ct.status = 'pending'`
      )
      .bind(camp.id)
      .all();
    const missing = results || [];
    if (data === "a:c:miss") {
      const lines = missing.map((u) => `• ${displayName(u) || u.username || u.telegram_id}`);
      await replyOrEdit(token, chatId, messageId, {
        text: `<b>${escapeHtml(t("btnCircleWhoMissing"))}</b>\n\n${escapeHtml(lines.join("\n") || "—")}`,
        keyboard: [[{ text: t("btnBack"), callback_data: "a:c" }], ...rowNav()],
      });
      return;
    }
    let n = 0;
    const reminded = [];
    for (const u of missing) {
      try {
        await sendMessage(token, u.telegram_id, escapeHtml(t("circleReminder")));
        await db
          .prepare(`UPDATE circle_targets SET reminded_at = datetime('now') WHERE campaign_id = ? AND user_id = ?`)
          .bind(camp.id, u.id)
          .run();
        n++;
        reminded.push(u);
      } catch {}
    }
    await sendMessage(token, chatId, formatSentReport(t("adminRemindersSent", { n }), reminded));
    return;
  }

  // Admin schedule
  if (data === "a:s") {
    await answerCallbackQuery(token, cq.id);
    await replyOrEdit(token, chatId, messageId, {
      text: `<b>${escapeHtml(t("adminScheduleTitle"))}</b>`,
      keyboard: [
        [{ text: t("btnSchedCreate"), callback_data: "a:s:new" }],
        [{ text: t("btnSchedEdit"), callback_data: "a:s:edit" }],
        [{ text: t("btnSchedCancelEvent"), callback_data: "a:s:cancel" }],
        ...rowNav(),
      ],
    });
    return;
  }
  if (data === "a:s:new") {
    await answerCallbackQuery(token, cq.id);
    await setUserState(db, user.id, "admin_sched_new", { step: "title", draft: {} });
    await replyOrEdit(token, chatId, messageId, {
      text: t("adminSchedAskTitle"),
      keyboard: [[{ text: t("btnCancel"), callback_data: "a:s" }], ...rowNav()],
    });
    return;
  }
  if (data === "a:s:edit" || data === "a:s:cancel") {
    await answerCallbackQuery(token, cq.id);
    const mode = data.endsWith("edit") ? "edit" : "cancel";
    const events = (await listAllActiveEvents(db)).slice(0, 30);
    const kb = events.map((ev) => [
      {
        text: `${ev.date} ${clockFromSql(ev.start_time)} ${ev.title}`.slice(0, 64),
        callback_data: mode === "edit" ? `a:s:e:${ev.id}` : `a:s:x:${ev.id}`,
      },
    ]);
    kb.push(...rowNav());
    await replyOrEdit(token, chatId, messageId, {
      text: mode === "edit" ? t("adminSchedPickEdit") : t("adminSchedPickCancel"),
      keyboard: kb,
    });
    return;
  }
  if (data.startsWith("a:s:x:")) {
    const id = Number(data.split(":")[3]);
    await db
      .prepare(`UPDATE events SET status = 'cancelled', updated_at = datetime('now') WHERE id = ?`)
      .bind(id)
      .run();
    await answerCallbackQuery(token, cq.id, t("adminSchedCancelled"));
    // notify registered users
    const { results } = await db
      .prepare(
        `SELECT u.telegram_id, e.title FROM registrations r
         JOIN users u ON u.id = r.user_id
         JOIN events e ON e.id = r.event_id
         WHERE r.event_id = ? AND r.status = 'registered'`
      )
      .bind(id)
      .all();
    for (const r of results || []) {
      try {
        await sendMessage(
          token,
          r.telegram_id,
          `${escapeHtml(t("eventCancelledNotify"))}\n\n<b>${escapeHtml(r.title)}</b>`
        );
      } catch {}
    }
    await replyOrEdit(token, chatId, messageId, renderAdminMenu());
    return;
  }
  if (data.startsWith("a:s:e:")) {
    const id = Number(data.split(":")[3]);
    await answerCallbackQuery(token, cq.id);
    await setUserState(db, user.id, "admin_sched_edit", { eventId: id, step: "field" });
    await replyOrEdit(token, chatId, messageId, {
      text: t("adminSchedEditHelp"),
      keyboard: [[{ text: t("btnCancel"), callback_data: "a:s" }], ...rowNav()],
    });
    return;
  }

  if (data === "a:admins") {
    await answerCallbackQuery(token, cq.id);
    const admins = await listAdminUsers(db);
    const body = admins.length
      ? formatPeopleLines(admins)
      : t("adminAdminsEmpty");
    await replyOrEdit(token, chatId, messageId, {
      text: `<b>${escapeHtml(t("adminAdminsTitle"))}</b>\n\n${escapeHtml(body)}`,
      keyboard: [[{ text: t("btnBack"), callback_data: "a" }], ...rowNav()],
    });
    return;
  }

  await answerCallbackQuery(token, cq.id);
  await replyOrEdit(token, chatId, messageId, await renderMainMenu(admin));
}


// ——— Message handler ———
async function handleMessage(token, db, env, msg) {
  const from = msg.from;
  if (!from) return;
  const chatId = msg.chat.id;
  let user = await getOrCreateUser(db, from);
  const admin = await isAdmin(db, from, env);

  // Shares (I want to share) — accept many media types
  const isShareMedia =
    msg.video_note || msg.voice || msg.video || msg.photo || msg.document || msg.audio;
  if (user.state === "awaiting_share" && (isShareMedia || (msg.text && !String(msg.text).startsWith("/")))) {
    if (user.reg_status !== "registered") {
      await sendMessage(token, chatId, escapeHtml(t("regNamePrompt")));
      return;
    }
    await forwardShareToAdmins(token, db, env, user, from, msg);
    await clearUserState(db, user.id);
    await sendMessage(token, chatId, escapeHtml(t("shareThanks")), (await renderMainMenu(admin)).keyboard);
    return;
  }

  // If user sends media without share state, ignore special handling
  if (isShareMedia && user.state !== "awaiting_share") {
    // fall through for video_note legacy circle campaigns if any
    if (msg.video_note) {
      const target = await activeCircleTarget(db, user.id);
      if (target && user.reg_status === "registered") {
        const fileId = msg.video_note.file_id;
        await db
          .prepare(
            `INSERT INTO circle_responses (campaign_id, user_id, file_id) VALUES (?, ?, ?)
             ON CONFLICT(campaign_id, user_id) DO UPDATE SET file_id = excluded.file_id, created_at = datetime('now')`
          )
          .bind(target.campaign_id, user.id, fileId)
          .run();
        await db
          .prepare(`UPDATE circle_targets SET status = 'done' WHERE campaign_id = ? AND user_id = ?`)
          .bind(target.campaign_id, user.id)
          .run();
        await sendMessage(token, chatId, escapeHtml(t("circleReceivedOk")));
        await forwardShareToAdmins(token, db, env, user, from, msg);
        return;
      }
    }
  }

  const text = msg.text || msg.caption || "";

  if (isStartCommand(text)) {
    await clearUserState(db, user.id);
    await navResetMenu(db, user.id);
    // Always allow re-registration for testing; linking stays idempotent by telegram_id
    await startRegistration(token, db, user, chatId);
    return;
  }

  if (isAdminCommand(text)) {
    user = await db.prepare("SELECT * FROM users WHERE id = ?").bind(user.id).first();
    if (Number(user.is_admin || 0) === 1) {
      await clearUserState(db, user.id);
      await navPush(db, user.id, "A");
      const payload = renderAdminMenu();
      await sendMessage(token, chatId, payload.text, payload.keyboard);
      return;
    }
    await setUserState(db, user.id, "awaiting_admin_password", {});
    await sendMessage(token, chatId, escapeHtml(t("adminPasswordPrompt")));
    return;
  }

  if (user.state === "awaiting_admin_password") {
    const ok = String(text || "").trim() === adminPassword(env);
    if (!ok) {
      await sendMessage(token, chatId, escapeHtml(t("adminPasswordWrong")));
      return;
    }
    await setAdminFlag(db, user.id, true);
    await clearUserState(db, user.id);
    await navPush(db, user.id, "A");
    await sendMessage(token, chatId, escapeHtml(t("adminPasswordOk")));
    const payload = renderAdminMenu();
    await sendMessage(token, chatId, payload.text, payload.keyboard);
    return;
  }

  // State: awaiting name — search by typed name only (also during re-registration)
  if (user.state === "awaiting_name" && text && !text.startsWith("/")) {
    const matches = rankParticipants(PARTICIPANTS, text, 15);
    await setUserState(db, user.id, "awaiting_name", {});
    await offerParticipantChoices(token, chatId, matches, "regSuggestionsTitle");
    return;
  }
  if (user.reg_status !== "registered" && text && !text.startsWith("/") && user.state !== "awaiting_admin_password" && user.state !== "awaiting_share") {
    const matches = rankParticipants(PARTICIPANTS, text, 15);
    await setUserState(db, user.id, "awaiting_name", {});
    await offerParticipantChoices(token, chatId, matches, "regSuggestionsTitle");
    return;
  }

  // Handle reg:notme via callback only — also support text states below

  if (user.reg_status !== "registered" && !admin) {
    await startRegistration(token, db, user, chatId);
    return;
  }

  // Refresh
  user = await db.prepare("SELECT * FROM users WHERE id = ?").bind(user.id).first();

  if (user.state === "awaiting_collab_name" && text) {
    const people = await allParticipants(db);
    const matches = rankParticipants(people, text, 10).filter((p) => p.id !== user.participant_id);
    const st = safeJson(user.state_data, { filters: {} });
    await saveCollabState(db, user.id, { filters: st.filters || {} });
    if (!matches.length) {
      await sendMessage(token, chatId, escapeHtml(t("collabNoResults")), [
        [{ text: t("btnBack"), callback_data: "c" }],
        ...rowNav(),
      ]);
      return;
    }
    const kb = matches.map((p) => [{ text: displayName(p).slice(0, 64), callback_data: `c:p:${p.id}` }]);
    kb.push([{ text: t("btnBack"), callback_data: "c" }]);
    await sendMessage(token, chatId, `<b>${escapeHtml(t("collabResultsTitle"))}</b>`, kb);
    return;
  }

  if (user.state === "admin_broadcast_compose" && admin && text) {
    const recipients = await registeredRecipients(db);
    if (!recipients.length) {
      await sendMessage(token, chatId, escapeHtml(t("adminBroadcastEmptyRecipients")));
      await clearUserState(db, user.id);
      return;
    }
    const key = `bcast:${user.id}:${Date.now()}`;
    const ins = await db
      .prepare(
        `INSERT INTO broadcasts (created_by, body_text, status, idempotency_key) VALUES (?, ?, 'draft', ?)`
      )
      .bind(user.id, text, key)
      .run();
    const broadcastId = ins.meta?.last_row_id;
    const names = recipients
      .slice(0, 10)
      .map((u) => displayName(u) || u.username || u.telegram_id)
      .join("\n");
    const preview = [
      `<b>${escapeHtml(t("adminBroadcastPreviewTitle"))}</b>`,
      "",
      escapeHtml(text),
      "",
      escapeHtml(t("adminBroadcastPreviewFilters", { filters: t("audienceAll") })),
      escapeHtml(t("adminBroadcastPreviewCount", { n: recipients.length })),
      escapeHtml(t("adminBroadcastPreviewNames", { names })),
    ].join("\n");
    await sendMessage(token, chatId, preview, [
      [{ text: t("btnBroadcastConfirmSend"), callback_data: `a:n:send:${broadcastId}` }],
      [{ text: t("btnBroadcastCancel"), callback_data: "a:n:cancel" }],
    ]);
    await setUserState(db, user.id, null, { pendingBroadcastId: broadcastId });
    return;
  }

  if (user.state === "admin_circle_prompt" && admin && text) {
    const st = safeJson(user.state_data, {});
    const mode = st.mode || "all";
    if (mode === "rand") {
      await setUserState(db, user.id, "admin_circle_random_n", { prompt: text });
      await sendMessage(token, chatId, escapeHtml(t("adminCircleRandomCountPrompt")));
      return;
    }
    // all
    await launchCircleCampaign(token, db, env, user, chatId, text, "all", {});
    return;
  }

  if (user.state === "admin_circle_random_n" && admin && text) {
    const st = safeJson(user.state_data, {});
    const n = Math.max(1, parseInt(text, 10) || 1);
    await launchCircleCampaign(token, db, env, user, chatId, st.prompt, "random", { n });
    return;
  }

  if (user.state === "admin_sched_new" && admin && text) {
    const st = safeJson(user.state_data, { step: "title", draft: {} });
    const draft = st.draft || {};
    if (st.step === "title") {
      draft.title = text.trim();
      await setUserState(db, user.id, "admin_sched_new", { step: "date", draft });
      await sendMessage(token, chatId, t("adminSchedAskDate"));
      return;
    }
    if (st.step === "date") {
      draft.date = parseDateInput(text);
      await setUserState(db, user.id, "admin_sched_new", { step: "time", draft });
      await sendMessage(token, chatId, t("adminSchedAskTime"));
      return;
    }
    if (st.step === "time") {
      const m = String(text).match(/(\d{1,2}:\d{2})\s*[-–]\s*(\d{1,2}:\d{2})/);
      if (!m) {
        await sendMessage(token, chatId, t("adminSchedTimeFormat"));
        return;
      }
      draft.start_time = normalizeTime(m[1]);
      draft.end_time = normalizeTime(m[2]);
      await setUserState(db, user.id, "admin_sched_new", { step: "place", draft });
      await sendMessage(token, chatId, t("adminSchedAskPlace"));
      return;
    }
    if (st.step === "place") {
      draft.location = text.trim();
      await setUserState(db, user.id, "admin_sched_new", { step: "desc", draft });
      await sendMessage(token, chatId, t("adminSchedAskDesc"));
      return;
    }
    if (st.step === "desc") {
      draft.description = text.trim() === "—" ? "" : text.trim();
      await db
        .prepare(
          `INSERT INTO events (title, description, date, start_time, end_time, category, location, speakers, status)
           VALUES (?, ?, ?, ?, ?, ?, ?, NULL, 'active')`
        )
        .bind(
          draft.title,
          draft.description || null,
          draft.date,
          draft.start_time,
          draft.end_time,
          "Custom",
          draft.location,
        )
        .run();
      await clearUserState(db, user.id);
      await sendMessage(token, chatId, escapeHtml(t("adminSchedSaved")));
      return;
    }
  }

  if (user.state === "admin_sched_edit" && admin && text) {
    const st = safeJson(user.state_data, {});
    const id = st.eventId;
    const parts = text.split("|").map((x) => x.trim());
    const field = (parts[0] || "").toLowerCase();
    const ev = await getEventById(db, id);
    if (!ev) {
      await clearUserState(db, user.id);
      return;
    }
    if (field === "title" && parts[1]) {
      await db.prepare(`UPDATE events SET title = ?, updated_at = datetime('now') WHERE id = ?`).bind(parts[1], id).run();
    } else if (field === "place" && parts[1]) {
      await db.prepare(`UPDATE events SET location = ?, updated_at = datetime('now') WHERE id = ?`).bind(parts[1], id).run();
    } else if (field === "date" && parts[1]) {
      await db.prepare(`UPDATE events SET date = ?, updated_at = datetime('now') WHERE id = ?`).bind(parseDateInput(parts[1]), id).run();
    } else if (field === "time" && parts[1] && parts[2]) {
      await db
        .prepare(`UPDATE events SET start_time = ?, end_time = ?, updated_at = datetime('now') WHERE id = ?`)
        .bind(normalizeTime(parts[1]), normalizeTime(parts[2]), id)
        .run();
    } else if (field === "desc") {
      await db
        .prepare(`UPDATE events SET description = ?, updated_at = datetime('now') WHERE id = ?`)
        .bind(parts.slice(1).join("|"), id)
        .run();
    } else {
      await sendMessage(token, chatId, escapeHtml(t("adminSchedUnknownFormat")));
      return;
    }
    await clearUserState(db, user.id);
    await sendMessage(token, chatId, escapeHtml(t("adminSchedSaved")));
    // notify registered
    const { results } = await db
      .prepare(
        `SELECT u.telegram_id FROM registrations r JOIN users u ON u.id = r.user_id
         WHERE r.event_id = ? AND r.status = 'registered'`
      )
      .bind(id)
      .all();
    const updated = await db.prepare("SELECT * FROM events WHERE id = ?").bind(id).first();
    for (const r of results || []) {
      try {
        await sendMessage(
          token,
          r.telegram_id,
          `${escapeHtml(t("scheduleChangedNotify"))}\n\n<b>${escapeHtml(updated.title)}</b>\n${escapeHtml(updated.date)} ${clockFromSql(updated.start_time)} · ${escapeHtml(updated.location || "")}`
        );
      } catch {}
    }
    return;
  }

  // default
  if (text) {
    await sendMessage(token, chatId, escapeHtml(t("unknownCmd")));
  }
}

function parseDateInput(s) {
  const m = String(s).trim().match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (m) return `${m[3]}-${m[2].padStart(2, "0")}-${m[1].padStart(2, "0")}`;
  return String(s).trim();
}

async function launchCircleCampaign(token, db, env, user, chatId, prompt, audienceType, audienceData) {
  const ins = await db
    .prepare(
      `INSERT INTO circle_campaigns (prompt, audience_type, audience_json, created_by) VALUES (?, ?, ?, ?)`
    )
    .bind(prompt, audienceType, JSON.stringify(audienceData || {}), user.id)
    .run();
  const campaignId = ins.meta?.last_row_id;
  const userIds = await resolveAudienceUserIds(db, audienceType, audienceData);
  for (const uid of userIds) {
    await db
      .prepare(
        `INSERT OR IGNORE INTO circle_targets (campaign_id, user_id, status) VALUES (?, ?, 'pending')`
      )
      .bind(campaignId, uid)
      .run();
  }
  const result = await sendCircleRequests(token, db, env, campaignId, userIds, prompt);
  await clearUserState(db, user.id);
  await sendMessage(
    token,
    chatId,
    formatSentReport(
      `${t("adminCircleSent")}\n${t("adminCircleSentCount", { sent: result.sent, total: userIds.length })}`,
      result.delivered || []
    )
  );
}

// Extra callback bits
async function handleCallbackExtra(token, db, env, cq) {
  const data = String(cq.data || "");
  const from = cq.from;
  const chatId = cq.message?.chat?.id;
  const user = await getOrCreateUser(db, from);

  if (data === "reg:notme") {
    await answerCallbackQuery(token, cq.id);
    await startRegistration(token, db, user, chatId);
    return true;
  }

  return false;
}

// ——— Worker entry ———
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "GET") {
      if (url.pathname === "/mapping-explainer.png" && mappingExplainerPng) {
        return new Response(mappingExplainerPng, {
          headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=3600" },
        });
      }
      if (url.pathname === "/" || url.pathname === "/health") {
        const evCount = typeof EVENTS !== "undefined" ? EVENTS.length : 0;
        return new Response(
          `Notations bot ok · ${BUILD} · participants=${PARTICIPANTS.length} · events=${evCount}`
        );
      }
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const secret = env.TELEGRAM_WEBHOOK_SECRET;
    if (secret) {
      const hdr = request.headers.get("X-Telegram-Bot-Api-Secret-Token");
      if (hdr !== secret) return new Response("Unauthorized", { status: 401 });
    }

    const token = env.TELEGRAM_BOT_TOKEN;
    if (!token) return new Response("Missing token", { status: 500 });
    if (!env.DB) return new Response("Missing D1 binding DB", { status: 500 });

    let update;
    try {
      update = await request.json();
    } catch {
      return new Response("Bad JSON", { status: 400 });
    }

    try {
      if (update.callback_query) {
        const handled = await handleCallbackExtra(token, env.DB, env, update.callback_query);
        if (!handled) await handleCallback(token, env.DB, env, update.callback_query);
      } else if (update.message) {
        await handleMessage(token, env.DB, env, update.message);
      }
    } catch (e) {
      console.error(e);
      try {
        const chatId = update.message?.chat?.id || update.callback_query?.message?.chat?.id;
        if (chatId) await sendMessage(token, chatId, escapeHtml(t("dbError")));
      } catch {}
    }

    return new Response("OK");
  },
};
