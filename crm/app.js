const DAY = 86_400_000;
const demoToday = new Date("2026-10-02T12:00:00+03:00");

const state = {
  bikes: [
    { id: "b01", code: "VB-014", name: "ВелиБери 014", status: "rented", model: "Курьер S2", year: 2025, mileage: 4280, battery: "48V · 20Ah", clientId: "c01", rentalId: "r01", starline: { online: true, updated: "2 мин назад", location: "район Сокольники", device: "Работает штатно" } },
    { id: "b02", code: "VB-021", name: "ВелиБери 021", status: "free", model: "Курьер S2", year: 2025, mileage: 3110, battery: "48V · 20Ah", starline: { online: true, updated: "5 мин назад", location: "пункт выдачи", device: "Работает штатно" } },
    { id: "b03", code: "VB-027", name: "ВелиБери 027", status: "rented", model: "Курьер S2", year: 2025, mileage: 5180, battery: "48V · 20Ah", clientId: "c02", rentalId: "r02", starline: { online: true, updated: "сейчас", location: "район Хамовники", device: "Работает штатно" } },
    { id: "b04", code: "VB-032", name: "ВелиБери 032", status: "repair", model: "Курьер M1", year: 2024, mileage: 6920, battery: "48V · 18Ah", starline: { online: false, updated: "1 день назад", location: "мастерская", device: "Нет связи" } },
    { id: "b05", code: "VB-038", name: "ВелиБери 038", status: "service", model: "Курьер S2", year: 2025, mileage: 4860, battery: "48V · 20Ah", starline: { online: true, updated: "12 мин назад", location: "пункт выдачи", device: "Работает штатно" } },
    { id: "b06", code: "VB-041", name: "ВелиБери 041", status: "rented", model: "Курьер S2", year: 2025, mileage: 3770, battery: "48V · 20Ah", clientId: "c03", rentalId: "r03", starline: { online: true, updated: "4 мин назад", location: "район Марьино", device: "Работает штатно" } },
    { id: "b07", code: "VB-045", name: "ВелиБери 045", status: "free", model: "Курьер M1", year: 2024, mileage: 7210, battery: "48V · 18Ah", starline: { online: true, updated: "8 мин назад", location: "пункт выдачи", device: "Работает штатно" } },
    { id: "b08", code: "VB-052", name: "ВелиБери 052", status: "rented", model: "Курьер S2", year: 2025, mileage: 2890, battery: "48V · 20Ah", clientId: "c04", rentalId: "r04", starline: { online: true, updated: "3 мин назад", location: "район Арбат", device: "Работает штатно" } },
    { id: "b09", code: "VB-056", name: "ВелиБери 056", status: "free", model: "Курьер S2", year: 2025, mileage: 2310, battery: "48V · 20Ah", starline: { online: true, updated: "7 мин назад", location: "пункт выдачи", device: "Работает штатно" } },
    { id: "b10", code: "VB-061", name: "ВелиБери 061", status: "rented", model: "Курьер S2", year: 2025, mileage: 3460, battery: "48V · 20Ah", clientId: "c05", rentalId: "r05", starline: { online: true, updated: "6 мин назад", location: "район Басманный", device: "Работает штатно" } },
    { id: "b11", code: "VB-067", name: "ВелиБери 067", status: "free", model: "Курьер S2", year: 2025, mileage: 1980, battery: "48V · 20Ah", starline: { online: true, updated: "9 мин назад", location: "пункт выдачи", device: "Работает штатно" } },
    { id: "b12", code: "VB-073", name: "ВелиБери 073", status: "free", model: "Курьер S2", year: 2026, mileage: 740, battery: "48V · 20Ah", starline: { online: true, updated: "1 мин назад", location: "пункт выдачи", device: "Работает штатно" } },
  ],
  clients: [
    { id: "c01", name: "Иван Мельников", phone: "+7 900 000-12-14", status: "active", rentalId: "r01", debt: 0, since: "май 2026", note: "Предпочитает связь по телефону после 10:00." },
    { id: "c02", name: "Артур Нигматуллин", phone: "+7 900 000-21-08", status: "attention", rentalId: "r02", debt: 2800, since: "июнь 2026", note: "Нужно уточнить оплату текущего продления." },
    { id: "c03", name: "Михаил Ким", phone: "+7 900 000-34-11", status: "active", rentalId: "r03", debt: 0, since: "февраль 2026", note: "Постоянный клиент, несколько продлений." },
    { id: "c04", name: "Рустам Сафиуллин", phone: "+7 900 000-46-19", status: "attention", rentalId: "r04", debt: 4200, since: "август 2026", note: "Аренда просрочена, менеджер связался утром." },
    { id: "c05", name: "Денис Волков", phone: "+7 900 000-52-27", status: "active", rentalId: "r05", debt: 0, since: "июль 2026", note: "Без особенностей." },
    { id: "c06", name: "Алексей Орлов", phone: "+7 900 000-63-04", status: "regular", debt: 0, since: "декабрь 2025", note: "Завершил три аренды." },
    { id: "c07", name: "Тимур Хабибуллин", phone: "+7 900 000-74-22", status: "new", debt: 0, since: "сентябрь 2026", note: "Первая аренда завершена." },
    { id: "c08", name: "Сергей Чен", phone: "+7 900 000-80-16", status: "regular", debt: 0, since: "январь 2026", note: "Интересуется долгосрочной арендой." },
    { id: "c09", name: "Олег Петров", phone: "+7 900 000-91-13", status: "new", debt: 0, since: "сентябрь 2026", note: "Ожидает свободный велосипед." },
    { id: "c10", name: "Максим Титов", phone: "+7 900 000-05-31", status: "regular", debt: 0, since: "апрель 2026", note: "Две завершённые аренды." },
  ],
  rentals: [
    { id: "r01", number: "АР-0104", clientId: "c01", bikeId: "b01", status: "soon", start: "2026-09-26", end: "2026-10-03", dailyRate: 850, total: 5950, paid: 5950, events: [{ title: "Велосипед выдан", text: "Аренда началась по демонстрационному тарифу", at: "26 сен · 10:24" }, { title: "Оплата отмечена", text: "5 950 ₽ · demo-запись", at: "26 сен · 10:18" }] },
    { id: "r02", number: "АР-0098", clientId: "c02", bikeId: "b03", status: "debt", start: "2026-09-22", end: "2026-10-06", dailyRate: 800, total: 11200, paid: 8400, events: [{ title: "Аренда продлена", text: "Добавлено 7 дней", at: "29 сен · 16:40" }, { title: "Велосипед выдан", text: "Состояние подтверждено", at: "22 сен · 09:12" }] },
    { id: "r03", number: "АР-0101", clientId: "c03", bikeId: "b06", status: "active", start: "2026-09-24", end: "2026-10-08", dailyRate: 820, total: 11480, paid: 11480, events: [{ title: "Аренда продлена", text: "Добавлено 7 дней", at: "30 сен · 11:05" }, { title: "Велосипед выдан", text: "Комплектность проверена", at: "24 сен · 13:31" }] },
    { id: "r04", number: "АР-0092", clientId: "c04", bikeId: "b08", status: "overdue", start: "2026-09-16", end: "2026-09-30", dailyRate: 800, total: 11200, paid: 7000, events: [{ title: "Срок аренды истёк", text: "Требуется решение менеджера", at: "30 сен · 20:00" }, { title: "Велосипед выдан", text: "Аренда на 14 дней", at: "16 сен · 09:45" }] },
    { id: "r05", number: "АР-0105", clientId: "c05", bikeId: "b10", status: "active", start: "2026-09-29", end: "2026-10-13", dailyRate: 790, total: 11060, paid: 11060, events: [{ title: "Велосипед выдан", text: "Аренда на 14 дней", at: "29 сен · 14:10" }, { title: "Оплата отмечена", text: "11 060 ₽ · demo-запись", at: "29 сен · 14:04" }] },
    { id: "r06", number: "АР-0084", clientId: "c06", bikeId: "b07", status: "completed", start: "2026-09-02", end: "2026-09-16", dailyRate: 790, total: 11060, paid: 11060, events: [{ title: "Возврат оформлен", text: "Велосипед принят без замечаний", at: "16 сен · 18:22" }, { title: "Велосипед выдан", text: "Аренда на 14 дней", at: "2 сен · 09:10" }] },
    { id: "r07", number: "АР-0080", clientId: "c07", bikeId: "b11", status: "completed", start: "2026-08-25", end: "2026-09-08", dailyRate: 790, total: 11060, paid: 11060, events: [{ title: "Возврат оформлен", text: "Велосипед принят", at: "8 сен · 19:14" }] },
    { id: "r08", number: "АР-0071", clientId: "c08", bikeId: "b02", status: "completed", start: "2026-08-08", end: "2026-08-22", dailyRate: 760, total: 10640, paid: 10640, events: [{ title: "Возврат оформлен", text: "Велосипед принят без замечаний", at: "22 авг · 17:40" }] },
  ],
  repairs: [
    { id: "s01", bikeId: "b04", status: "repair", type: "Ремонт", reason: "Замена контроллера", start: "1 окт", comment: "Диагностика завершена, деталь заказана." },
    { id: "s02", bikeId: "b05", status: "service", type: "ТО", reason: "Плановое обслуживание", start: "2 окт", comment: "Проверить тормоза и цепь после 4 800 км." },
    { id: "s03", bikeId: "b07", status: "done", type: "Ремонт", reason: "Регулировка тормозов", start: "29 сен", comment: "Работы завершены, велосипед доступен." },
    { id: "s04", bikeId: "b02", status: "done", type: "ТО", reason: "Плановый осмотр", start: "26 сен", comment: "Замечаний нет." },
  ],
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const money = (value) => `${new Intl.NumberFormat("ru-RU").format(value)} ₽`;
const date = (iso) => new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${iso}T12:00:00`)).replace(" г.", "");
const initials = (name) => name.split(" ").map((word) => word[0]).slice(0, 2).join("");
const client = (id) => state.clients.find((item) => item.id === id);
const bike = (id) => state.bikes.find((item) => item.id === id);
const rental = (id) => state.rentals.find((item) => item.id === id);
const bikeRentals = (bikeId) => state.rentals.filter((item) => item.bikeId === bikeId);
const clientRentals = (clientId) => state.rentals.filter((item) => item.clientId === clientId);

const labels = {
  bike: {
    free: ["Свободен", "green"], rented: ["В аренде", "dark"], repair: ["В ремонте", "red"], service: ["Требует ТО", "amber"],
  },
  rental: {
    active: ["Активна", "green"], soon: ["Скоро завершится", "amber"], overdue: ["Просрочена", "red"], debt: ["Есть задолженность", "red"], completed: ["Завершена", "gray"],
  },
  client: {
    active: ["Активный", "green"], attention: ["Требует внимания", "red"], regular: ["Постоянный", "blue"], new: ["Новый", "gray"],
  },
  service: {
    repair: ["В работе", "red"], service: ["Ожидает ТО", "amber"], done: ["Завершено", "green"],
  },
};

function badge(type, status) {
  const [text, color] = labels[type][status] || [status, "gray"];
  return `<span class="badge ${color}">${text}</span>`;
}

function heading(title, subtitle, actions = "", eyebrow = "ВелиБери · demo") {
  return `<div class="page-heading"><div><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${subtitle}</p></div>${actions ? `<div class="page-heading-actions">${actions}</div>` : ""}</div>`;
}

function panel(title, subtitle, content, extra = "") {
  return `<section class="panel"><div class="panel-head"><div><h2>${title}</h2>${subtitle ? `<p>${subtitle}</p>` : ""}</div>${extra}</div>${content}</section>`;
}

function stat(label, value, hint, variant = "", icon = "↗") {
  return `<article class="stat-card ${variant}"><div class="stat-label"><span>${label}</span><span class="stat-icon">${icon}</span></div><div class="stat-value">${value}</div><div class="stat-hint">${hint}</div></article>`;
}

function entityCell(primary, secondary, kind = "person") {
  const text = kind === "bike" ? "VB" : initials(primary);
  return `<div class="entity-cell"><span class="entity-thumb ${kind}">${text}</span><div><strong>${primary}</strong><small>${secondary}</small></div></div>`;
}

function routeInfo() {
  const raw = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  return { section: raw[0] || "dashboard", id: raw[1] || null };
}

function setBreadcrumb(section, detail) {
  const names = { dashboard: "Главная", rentals: "Аренды", bikes: "Велосипеды", clients: "Клиенты", service: "Ремонт и обслуживание" };
  $("#breadcrumbs").innerHTML = detail ? `${names[section]} <span>›</span> <strong>${detail}</strong>` : `<strong>${names[section] || "Главная"}</strong>`;
  $$(".side-nav a").forEach((link) => link.classList.toggle("active", link.dataset.route === section));
}

function dashboardView() {
  const free = state.bikes.filter((item) => item.status === "free").length;
  const rented = state.bikes.filter((item) => item.status === "rented").length;
  const unavailable = state.bikes.length - free - rented;
  const activeRentals = state.rentals.filter((item) => item.status !== "completed");
  const debt = activeRentals.reduce((sum, item) => sum + Math.max(0, item.total - item.paid), 0);
  const debtRentals = activeRentals.filter((item) => item.total > item.paid);
  const rentalAttention = activeRentals.filter((item) => ["soon", "overdue", "debt"].includes(item.status)).map((item) => {
    const c = client(item.clientId); const b = bike(item.bikeId); const balance = item.total - item.paid;
    if (item.status === "overdue") return { icon: "!", color: "red", title: `Аренда ${item.number} просрочена`, meta: `${c.name} · ${b.code}`, side: "проверить", href: `#/rentals/${item.id}` };
    if (item.status === "debt") return { icon: "₽", color: "red", title: `Задолженность ${money(balance)}`, meta: `${c.name} · ${item.number}`, side: "уточнить", href: `#/rentals/${item.id}` };
    return { icon: "→", color: "amber", title: `Аренда ${item.number} скоро заканчивается`, meta: `${c.name} · ${b.code}`, side: date(item.end), href: `#/rentals/${item.id}` };
  });
  const bikeAttention = state.bikes.filter((item) => ["repair", "service"].includes(item.status)).map((item) => {
    const record = state.repairs.find((entry) => entry.bikeId === item.id && entry.status !== "done");
    return item.status === "service"
      ? { icon: "◇", color: "amber", title: `${item.code} требует обслуживания`, meta: record?.reason || "Нужно запланировать работы", side: "ТО", href: `#/bikes/${item.id}` }
      : { icon: "×", color: "blue", title: `${item.code} находится в ремонте`, meta: record?.reason || "Работы в процессе", side: record?.start || "сейчас", href: `#/bikes/${item.id}` };
  });
  const attention = [...rentalAttention, ...bikeAttention];
  const latest = [...state.rentals].sort((a, b) => b.start.localeCompare(a.start)).slice(0, 5);
  const attentionHtml = `<div class="attention-list">${attention.map((item) => `<a class="attention-item" href="${item.href}"><span class="attention-icon ${item.color}">${item.icon}</span><div><div class="attention-title">${item.title}</div><div class="attention-meta">${item.meta}</div></div><div class="attention-side">${item.side}<br>›</div></a>`).join("")}</div>`;
  const fleetHtml = `<div class="fleet-summary"><div class="fleet-total"><strong>${state.bikes.length}</strong><span>велосипедов в demo</span></div><div class="fleet-bar"><i class="free" style="width:${free / state.bikes.length * 100}%"></i><i class="rent" style="width:${rented / state.bikes.length * 100}%"></i><i class="service" style="width:${unavailable / state.bikes.length * 100}%"></i></div><div class="fleet-legend"><div><i style="background:var(--green)"></i><span>Свободны</span><b>${free}</b></div><div><i style="background:var(--ink)"></i><span>В аренде</span><b>${rented}</b></div><div><i style="background:var(--amber)"></i><span>Ремонт / ТО</span><b>${unavailable}</b></div></div></div>`;
  return `<div class="page">${heading("Добрый день, менеджер", "Состояние проката на 2 октября · данные демонстрационные", `<a class="button button-primary" href="#/rentals">Открыть аренды <span>→</span></a>`)}<div class="stats-grid">${stat("Велосипеды", state.bikes.length, `${free} готовы к выдаче`, "dark", "◎")}${stat("В аренде", rented, `${Math.round(rented / state.bikes.length * 100)}% demo-парка`, "", "↗")}${stat("Активные аренды", activeRentals.length, `${rentalAttention.length} требуют внимания`, "accent", "⌁")}${stat("Задолженность", money(debt), `по ${debtRentals.length} активным арендам`, "", "₽")}</div><div class="dashboard-grid">${panel("Требует внимания", "Приоритетные события на сегодня", attentionHtml, `<span class="badge red">${attention.length} событий</span>`)}${panel("Состояние парка", "Распределение demo-выборки", fleetHtml)}</div><div class="section-gap">${panel("Последние аренды", "Связанные тестовые записи", rentalsTable(latest, true), `<a class="text-button" href="#/rentals">Все аренды →</a>`)}</div></div>`;
}

function rentalsTable(items, compact = false) {
  if (!items.length) return `<div class="empty-state"><i>⌕</i><strong>Ничего не найдено</strong><p>Попробуйте изменить запрос или фильтр.</p></div>`;
  return `<div class="table-wrap"><table><thead><tr><th>Аренда</th><th>Клиент</th><th>Велосипед</th><th>Период</th><th>Статус</th>${compact ? "" : "<th>Финансы</th>"}<th></th></tr></thead><tbody>${items.map((item) => { const c = client(item.clientId); const b = bike(item.bikeId); const balance = item.total - item.paid; return `<tr data-href="#/rentals/${item.id}"><td><strong>${item.number}</strong><br><small class="muted">с ${date(item.start)}</small></td><td>${entityCell(c.name, c.phone)}</td><td><strong>${b.code}</strong><br><small class="muted">${b.model}</small></td><td>${date(item.end)}<br><small class="muted">плановое окончание</small></td><td>${badge("rental", item.status)}</td>${compact ? "" : `<td class="${balance > 0 ? "money negative" : ""}">${balance > 0 ? `− ${money(balance)}` : "Оплачено"}</td>`}<td class="right">›</td></tr>`; }).join("")}</tbody></table></div>`;
}

function rentalsView() {
  return `<div class="page">${heading("Аренды", "Активные и завершённые аренды на синтетических данных", `<button class="button button-primary" data-demo-action>＋ Новая аренда</button>`)}<div class="toolbar"><label class="search"><input id="rental-search" placeholder="Поиск по клиенту, номеру, велосипеду"></label><select class="select" id="rental-filter"><option value="all">Все состояния</option><option value="current">Текущие</option><option value="attention">Требуют внимания</option><option value="completed">Завершённые</option></select><span class="result-count" id="rental-count"></span></div><section class="panel" id="rental-results"></section><div class="demo-callout">Статусы в этой версии — демонстрационные сценарии интерфейса, а не утверждённая модель процесса «ВелиБери».</div></div>`;
}

function updateRentalResults() {
  const query = ($("#rental-search")?.value || "").toLowerCase();
  const filter = $("#rental-filter")?.value || "all";
  const items = state.rentals.filter((item) => {
    const haystack = `${item.number} ${client(item.clientId).name} ${bike(item.bikeId).code}`.toLowerCase();
    const matchesFilter = filter === "all" || (filter === "current" && item.status !== "completed") || (filter === "attention" && ["soon", "overdue", "debt"].includes(item.status)) || (filter === "completed" && item.status === "completed");
    return haystack.includes(query) && matchesFilter;
  });
  $("#rental-results").innerHTML = rentalsTable(items);
  $("#rental-count").textContent = `${items.length} из ${state.rentals.length}`;
  bindTableLinks();
}

function rentalDetailView(item) {
  const c = client(item.clientId); const b = bike(item.bikeId); const balance = item.total - item.paid; const paidPart = Math.min(100, Math.round(item.paid / item.total * 100));
  const finance = `<div class="finance-grid"><div class="finance-item"><small>Стоимость аренды</small><strong>${money(item.total)}</strong></div><div class="finance-item"><small>Оплачено</small><strong>${money(item.paid)}</strong><div class="progress"><i style="width:${paidPart}%"></i></div></div><div class="finance-item ${balance > 0 ? "debt" : ""}"><small>${balance > 0 ? "Остаток / задолженность" : "К оплате"}</small><strong>${money(balance)}</strong></div></div>${balance > 0 ? `<div class="notice"><b>!</b><span>Финансовое состояние показано только для demo. Платёжная система не подключена.</span></div>` : ""}`;
  const info = `<div class="info-grid"><div class="info-item"><small>Клиент</small><strong><a href="#/clients/${c.id}">${c.name} →</a></strong></div><div class="info-item"><small>Велосипед</small><strong><a href="#/bikes/${b.id}">${b.code} · ${b.model} →</a></strong></div><div class="info-item"><small>Начало</small><strong>${date(item.start)}</strong></div><div class="info-item"><small>Плановое окончание</small><strong>${date(item.end)}</strong></div><div class="info-item"><small>Дневной тариф · demo</small><strong>${money(item.dailyRate)}</strong></div><div class="info-item"><small>Состояние</small><strong>${badge("rental", item.status)}</strong></div></div>`;
  const actions = item.status !== "completed" ? `<button class="button button-outline" data-return="${item.id}">Оформить возврат</button><button class="button button-primary" data-extend="${item.id}">Продлить аренду</button>` : `<span class="badge gray">Аренда завершена</span>`;
  return `<div class="page"><div class="detail-header"><div class="detail-title"><div class="detail-mark">АР</div><div><p>Карточка аренды</p><h1>${item.number}</h1><div>${badge("rental", item.status)}</div></div></div><div class="detail-actions">${actions}</div></div><div class="detail-layout"><div class="stack">${panel("Детали аренды", "Связанные demo-данные", info)}${panel("Финансы", "Демонстрационный расчёт", finance)}</div><div class="stack">${panel("История событий", "Последние изменения", timeline(item.events))}<div class="demo-callout">Этот экран демонстрирует предполагаемый рабочий сценарий. Правила продления, возврата и оплаты уточняются в discovery.</div></div></div></div>`;
}

function timeline(events) {
  return `<div class="timeline">${events.map((event) => `<div class="timeline-item"><span class="timeline-dot"></span><strong>${event.title}</strong><p>${event.text}</p><time>${event.at}</time></div>`).join("")}</div>`;
}

function bikesView() {
  return `<div class="page">${heading("Велосипеды", "Каталог demo-парка и текущая доступность", `<button class="button button-primary" data-demo-action>＋ Добавить велосипед</button>`)}<div class="toolbar"><label class="search"><input id="bike-search" placeholder="Поиск по номеру или модели"></label><select class="select" id="bike-filter"><option value="all">Все состояния</option><option value="free">Свободны</option><option value="rented">В аренде</option><option value="repair">В ремонте</option><option value="service">Требуют ТО</option></select><span class="result-count" id="bike-count"></span></div><div class="card-grid" id="bike-results"></div></div>`;
}

function updateBikeResults() {
  const query = ($("#bike-search")?.value || "").toLowerCase(); const filter = $("#bike-filter")?.value || "all";
  const items = state.bikes.filter((item) => `${item.code} ${item.name} ${item.model}`.toLowerCase().includes(query) && (filter === "all" || item.status === filter));
  $("#bike-count").textContent = `${items.length} из ${state.bikes.length}`;
  $("#bike-results").innerHTML = items.length ? items.map((item) => { const c = item.clientId ? client(item.clientId) : null; return `<article class="bike-card" data-href="#/bikes/${item.id}" tabindex="0"><div class="bike-card-top"><div><span class="bike-card-code">${item.code}</span><h3>${item.name}</h3></div>${badge("bike", item.status)}</div><div class="bike-illustration" aria-hidden="true"></div><div class="bike-card-info"><div><span>${c ? "Текущий арендатор" : "Местоположение"}</span><strong>${c ? c.name : item.status === "repair" ? "Мастерская" : "Пункт выдачи"}</strong></div><div class="right"><span>Пробег</span><strong>${new Intl.NumberFormat("ru-RU").format(item.mileage)} км</strong></div></div></article>`; }).join("") : `<div class="panel empty-state"><i>⌕</i><strong>Велосипеды не найдены</strong><p>Измените поиск или состояние.</p></div>`;
  bindCardLinks();
}

function bikeDetailView(item) {
  const currentRental = item.rentalId ? rental(item.rentalId) : null; const currentClient = item.clientId ? client(item.clientId) : null;
  const rentalContent = currentRental ? `<div class="rental-hero"><div class="rental-hero-top"><div><small class="muted">Текущая аренда</small><h3><a href="#/rentals/${currentRental.id}">${currentRental.number} →</a></h3><p><a href="#/clients/${currentClient.id}">${currentClient.name}</a></p></div>${badge("rental", currentRental.status)}</div><div class="rental-mini-grid"><div><small>Начало</small><strong>${date(currentRental.start)}</strong></div><div><small>Плановый возврат</small><strong>${date(currentRental.end)}</strong></div><div><small>Финансы</small><strong>${currentRental.total === currentRental.paid ? "Оплачено" : `Остаток ${money(currentRental.total - currentRental.paid)}`}</strong></div></div></div>` : `<div class="empty-state"><i>✓</i><strong>Нет текущей аренды</strong><p>${item.status === "free" ? "Велосипед готов к выдаче." : "Велосипед временно недоступен."}</p></div>`;
  const info = `<div class="info-grid"><div class="info-item"><small>Внутренний номер</small><strong>${item.code}</strong></div><div class="info-item"><small>Модель</small><strong>${item.model}</strong></div><div class="info-item"><small>Год</small><strong>${item.year}</strong></div><div class="info-item"><small>Пробег</small><strong>${new Intl.NumberFormat("ru-RU").format(item.mileage)} км</strong></div><div class="info-item"><small>Батарея</small><strong>${item.battery}</strong></div><div class="info-item"><small>Состояние</small><strong>${badge("bike", item.status)}</strong></div></div>`;
  const starline = `<div class="starline-head"><div class="starline-brand"><i>✦</i> StarLine</div><span class="concept-label">Концепция интеграции</span></div><div class="demo-map"><span class="map-pin"></span><span class="map-caption">Демонстрационная карта · не реальные координаты</span></div><div class="starline-data"><div><small>Статус связи</small><strong><i class="connection-dot" style="${item.starline.online ? "" : "background:var(--red);box-shadow:none"}"></i>${item.starline.online ? "На связи" : "Нет связи"}</strong></div><div><small>Последнее обновление</small><strong>${item.starline.updated}</strong></div><div><small>Условное местоположение</small><strong>${item.starline.location}</strong></div><div><small>Состояние устройства</small><strong>${item.starline.device}</strong></div></div><div class="starline-note">Возможности официального API исследуются. Здесь нет удалённых команд; данные и карта полностью демонстрационные.</div>`;
  const rentals = bikeRentals(item.id);
  const history = rentals.length ? rentals.map((r) => `<tr data-href="#/rentals/${r.id}"><td><strong>${r.number}</strong></td><td>${client(r.clientId).name}</td><td>${date(r.start)} — ${date(r.end)}</td><td>${badge("rental", r.status)}</td><td class="right">›</td></tr>`).join("") : `<tr><td colspan="5" class="muted">История пока пуста</td></tr>`;
  const serviceRecords = state.repairs.filter((record) => record.bikeId === item.id);
  const service = serviceRecords.length ? serviceRecords.map((record) => `<div class="timeline-item"><span class="timeline-dot"></span><strong>${record.reason}</strong><p>${record.comment}</p><time>${record.start} · ${labels.service[record.status][0]}</time></div>`).join("") : `<div class="empty-state"><i>◇</i><strong>Записей нет</strong><p>История ремонта появится здесь.</p></div>`;
  const repairDisabled = item.status === "rented" || item.status === "repair";
  const repairTitle = item.status === "rented" ? "Нельзя отправить в ремонт при активной аренде" : item.status === "repair" ? "Велосипед уже в ремонте" : "Отправить в ремонт";
  return `<div class="page"><div class="detail-header"><div class="detail-title"><div class="detail-mark">${item.code.replace("VB-", "")}</div><div><p>${item.model} · ${item.year}</p><h1>${item.name}</h1><div>${badge("bike", item.status)}</div></div></div><div class="detail-actions"><button class="button button-outline" data-repair="${item.id}" ${repairDisabled ? "disabled" : ""} title="${repairTitle}">◇ ${repairTitle}</button></div></div><div class="detail-layout"><div class="stack">${panel("Текущая аренда", "Связанный операционный контекст", rentalContent)}${panel("Основные сведения", "Поля адаптированы для электровелосипеда", info)}${panel("История аренды", "Демонстрационные связанные записи", `<div class="table-wrap"><table><thead><tr><th>Аренда</th><th>Клиент</th><th>Период</th><th>Статус</th><th></th></tr></thead><tbody>${history}</tbody></table></div>`)}</div><div class="stack"><section class="panel starline-card">${starline}</section>${panel("Ремонт и обслуживание", "История работ", `<div class="timeline">${service}</div>`)}</div></div></div>`;
}

function clientsView() {
  return `<div class="page">${heading("Клиенты", "Только вымышленные данные для демонстрации интерфейса", `<button class="button button-primary" data-demo-action>＋ Добавить клиента</button>`)}<div class="toolbar"><label class="search"><input id="client-search" placeholder="Поиск по имени или телефону"></label><select class="select" id="client-filter"><option value="all">Все клиенты</option><option value="active">С текущей арендой</option><option value="debt">С задолженностью</option><option value="regular">Постоянные</option></select><span class="result-count" id="client-count"></span></div><section class="panel" id="client-results"></section></div>`;
}

function updateClientResults() {
  const query = ($("#client-search")?.value || "").toLowerCase(); const filter = $("#client-filter")?.value || "all";
  const items = state.clients.filter((item) => `${item.name} ${item.phone}`.toLowerCase().includes(query) && (filter === "all" || (filter === "active" && item.rentalId) || (filter === "debt" && item.debt > 0) || (filter === "regular" && item.status === "regular")));
  $("#client-count").textContent = `${items.length} из ${state.clients.length}`;
  $("#client-results").innerHTML = `<div class="table-wrap"><table><thead><tr><th>Клиент</th><th>Состояние</th><th>Текущая аренда</th><th>Задолженность</th><th>С нами</th><th></th></tr></thead><tbody>${items.map((item) => { const r = item.rentalId ? rental(item.rentalId) : null; return `<tr data-href="#/clients/${item.id}"><td>${entityCell(item.name, item.phone)}</td><td>${badge("client", item.status)}</td><td>${r ? `${r.number} · ${bike(r.bikeId).code}` : "—"}</td><td class="${item.debt ? "money negative" : "muted"}">${item.debt ? money(item.debt) : "Нет"}</td><td class="muted">с ${item.since}</td><td class="right">›</td></tr>`; }).join("")}</tbody></table></div>`;
  bindTableLinks();
}

function clientDetailView(item) {
  const current = item.rentalId ? rental(item.rentalId) : null;
  const currentHtml = current ? `<div class="rental-hero"><div class="rental-hero-top"><div><small class="muted">Текущая аренда</small><h3><a href="#/rentals/${current.id}">${current.number} →</a></h3><p><a href="#/bikes/${current.bikeId}">${bike(current.bikeId).code} · ${bike(current.bikeId).model}</a></p></div>${badge("rental", current.status)}</div><div class="rental-mini-grid"><div><small>До</small><strong>${date(current.end)}</strong></div><div><small>Стоимость</small><strong>${money(current.total)}</strong></div><div><small>Остаток</small><strong>${money(current.total-current.paid)}</strong></div></div></div>` : `<div class="empty-state"><i>○</i><strong>Нет текущей аренды</strong><p>Предыдущие аренды доступны в истории.</p></div>`;
  const history = clientRentals(item.id);
  return `<div class="page"><div class="detail-header"><div class="detail-title"><div class="detail-mark">${initials(item.name)}</div><div><p>Карточка клиента · синтетические данные</p><h1>${item.name}</h1><div>${badge("client", item.status)}</div></div></div><div class="detail-actions"><button class="button button-outline" data-demo-action>Добавить заметку</button></div></div><div class="detail-layout"><div class="stack">${panel("Текущая аренда", "Операционный контекст", currentHtml)}${panel("История аренды", `${history.length} связанных записей`, rentalsTable(history))}</div><div class="stack">${panel("Контактная информация", "Без чувствительных документов", `<div class="info-grid"><div class="info-item"><small>Имя</small><strong>${item.name}</strong></div><div class="info-item"><small>Телефон · demo</small><strong>${item.phone}</strong></div><div class="info-item"><small>Клиент с</small><strong>${item.since}</strong></div><div class="info-item"><small>Финансовое состояние</small><strong class="${item.debt ? "money negative" : ""}">${item.debt ? `Долг ${money(item.debt)}` : "Без задолженности"}</strong></div></div>`)}${panel("Заметки", "Рабочий контекст менеджера", `<div class="notes">${item.note}<div class="demo-callout">Паспортные и банковские данные в prototype не хранятся.</div></div>`)}</div></div></div>`;
}

function serviceView() {
  const columns = [
    { key: "repair", title: "В ремонте", hint: "Активные работы" },
    { key: "service", title: "Требуют обслуживания", hint: "Ожидают начала" },
    { key: "done", title: "Недавно завершено", hint: "Возвращены в парк" },
  ];
  return `<div class="page">${heading("Ремонт и обслуживание", "Операционный обзор работ без складского учёта", `<a class="button button-primary" href="#/bikes">Выбрать велосипед <span>→</span></a>`)}<div class="service-board">${columns.map((column) => { const records = state.repairs.filter((item) => item.status === column.key); return `<section class="service-column"><div class="service-column-head"><div><strong>${column.title}</strong><br>${column.hint}</div><span>${records.length}</span></div>${records.length ? records.map((record) => { const b = bike(record.bikeId); return `<article class="service-ticket"><div class="service-ticket-top"><a href="#/bikes/${b.id}"><strong>${b.code}</strong> ↗</a>${badge("service", record.status)}</div><h3>${record.reason}</h3><p>${record.comment}</p><div class="service-ticket-meta"><span>${record.type}</span><span>${record.start}</span></div></article>`; }).join("") : `<div class="panel empty-state"><i>✓</i><strong>Записей нет</strong></div>`}</section>`; }).join("")}</div><div class="demo-callout">Типы работ и состояния — демонстрационные. Фактический процесс ремонта и обслуживания будет уточнён с командой «ВелиБери».</div></div>`;
}

function notFoundView() {
  return `<div class="page"><div class="panel empty-state"><i>?</i><strong>Экран не найден</strong><p><a class="text-button" href="#/dashboard">Вернуться на главную</a></p></div></div>`;
}

function render() {
  closeModal();
  const { section, id } = routeInfo(); let html = ""; let detail = "";
  if (section === "dashboard") html = dashboardView();
  else if (section === "rentals" && id) { const item = rental(id); html = item ? rentalDetailView(item) : notFoundView(); detail = item?.number || "Не найдено"; }
  else if (section === "rentals") html = rentalsView();
  else if (section === "bikes" && id) { const item = bike(id); html = item ? bikeDetailView(item) : notFoundView(); detail = item?.code || "Не найдено"; }
  else if (section === "bikes") html = bikesView();
  else if (section === "clients" && id) { const item = client(id); html = item ? clientDetailView(item) : notFoundView(); detail = item?.name || "Не найдено"; }
  else if (section === "clients") html = clientsView();
  else if (section === "service") html = serviceView();
  else html = notFoundView();
  $("#app").innerHTML = html;
  setBreadcrumb(section, detail);
  updateNavCounts();
  bindView(section);
  $("#sidebar").classList.remove("open");
  window.scrollTo(0, 0);
}

function bindView(section) {
  bindTableLinks(); bindCardLinks();
  if (section === "rentals" && !routeInfo().id) {
    $("#rental-search").addEventListener("input", updateRentalResults); $("#rental-filter").addEventListener("change", updateRentalResults); updateRentalResults();
  }
  if (section === "bikes" && !routeInfo().id) {
    $("#bike-search").addEventListener("input", updateBikeResults); $("#bike-filter").addEventListener("change", updateBikeResults); updateBikeResults();
  }
  if (section === "clients" && !routeInfo().id) {
    $("#client-search").addEventListener("input", updateClientResults); $("#client-filter").addEventListener("change", updateClientResults); updateClientResults();
  }
  $$('[data-extend]').forEach((button) => button.addEventListener("click", () => openExtendModal(button.dataset.extend)));
  $$('[data-repair]').forEach((button) => button.addEventListener("click", () => openRepairModal(button.dataset.repair)));
  $$('[data-return]').forEach((button) => button.addEventListener("click", () => showDemoNotice("Возврат", "Workflow возврата будет добавлен после уточнения обязательной проверки велосипеда.")));
  $$('[data-demo-action]').forEach((button) => button.addEventListener("click", () => showDemoNotice("Демо-действие", "Эта функция не входит в два активных сценария первой итерации.")));
}

function bindTableLinks() {
  $$('tr[data-href]').forEach((row) => row.addEventListener("click", () => { location.hash = row.dataset.href.slice(1); }));
}

function bindCardLinks() {
  $$('[data-href]:not(tr)').forEach((card) => {
    card.addEventListener("click", () => { location.hash = card.dataset.href.slice(1); });
    card.addEventListener("keydown", (event) => { if (event.key === "Enter") location.hash = card.dataset.href.slice(1); });
  });
}

function openModal(content) {
  $("#modal-root").innerHTML = `<div class="modal-backdrop" role="presentation"><section class="modal" role="dialog" aria-modal="true">${content}</section></div>`;
  $(".modal-backdrop").addEventListener("click", (event) => { if (event.target.classList.contains("modal-backdrop")) closeModal(); });
  $$("[data-close-modal]").forEach((button) => button.addEventListener("click", closeModal));
  document.addEventListener("keydown", onEscape);
}

function closeModal() {
  $("#modal-root").innerHTML = "";
  document.removeEventListener("keydown", onEscape);
}

function onEscape(event) { if (event.key === "Escape") closeModal(); }

function openExtendModal(id) {
  const item = rental(id); let duration = 7;
  const renderCalc = () => {
    const oldEnd = new Date(`${item.end}T12:00:00`); const newEnd = new Date(oldEnd.getTime() + duration * DAY); const addition = duration * item.dailyRate;
    $("#extension-calculation").innerHTML = `<div><span>Текущая дата окончания</span><strong>${date(item.end)}</strong></div><div><span>Новая дата окончания</span><strong>${new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "short", year: "numeric" }).format(newEnd).replace(" г.", "")}</strong></div><div><span>Доплата · demo</span><strong>${money(addition)}</strong></div><div><span>Новая стоимость аренды</span><strong>${money(item.total + addition)}</strong></div>`;
  };
  openModal(`<div class="modal-head"><div><h2>Продлить ${item.number}</h2><p>${client(item.clientId).name} · ${bike(item.bikeId).code}</p></div><button class="modal-close" data-close-modal aria-label="Закрыть">×</button></div><div class="modal-body"><div class="field"><label>Новый срок</label><div class="duration-options"><button class="duration-option" data-duration="3"><strong>3 дня</strong><small>${money(item.dailyRate * 3)}</small></button><button class="duration-option active" data-duration="7"><strong>7 дней</strong><small>${money(item.dailyRate * 7)}</small></button><button class="duration-option" data-duration="14"><strong>14 дней</strong><small>${money(item.dailyRate * 14)}</small></button></div></div><div class="calculation" id="extension-calculation"></div><div class="demo-callout">Расчёт демонстрационный. Оплата не списывается, платёжная система не подключена.</div></div><div class="modal-footer"><button class="button button-outline" data-close-modal>Отмена</button><button class="button button-primary" id="confirm-extension">Подтвердить продление</button></div>`);
  renderCalc();
  $$('[data-duration]').forEach((button) => button.addEventListener("click", () => { duration = Number(button.dataset.duration); $$('[data-duration]').forEach((item) => item.classList.toggle("active", item === button)); renderCalc(); }));
  $("#confirm-extension").addEventListener("click", () => {
    const oldEnd = new Date(`${item.end}T12:00:00`); const newEnd = new Date(oldEnd.getTime() + duration * DAY);
    item.end = newEnd.toISOString().slice(0, 10); item.total += duration * item.dailyRate; item.status = item.status === "overdue" ? "debt" : "active";
    item.events.unshift({ title: "Аренда продлена", text: `Добавлено ${duration} дней · ${money(duration * item.dailyRate)} · demo`, at: "2 окт · сейчас" });
    closeModal(); render(); showToast("Аренда продлена", `Новая дата окончания — ${date(item.end)}`);
  });
}

function openRepairModal(id) {
  const item = bike(id);
  if (item.status === "rented") { showDemoNotice("Действие недоступно", "Сначала нужно завершить активную аренду и принять велосипед."); return; }
  if (item.status === "repair") return;
  openModal(`<div class="modal-head"><div><h2>Отправить ${item.code} в ремонт</h2><p>${item.name} · ${item.model}</p></div><button class="modal-close" data-close-modal aria-label="Закрыть">×</button></div><div class="modal-body"><div class="field"><label for="repair-reason">Причина</label><select id="repair-reason"><option>Неисправность электрики</option><option>Тормозная система</option><option>Повреждение колеса</option><option>Проблема с трансмиссией</option><option>Другое</option></select></div><div class="field"><label for="repair-comment">Комментарий</label><textarea id="repair-comment" placeholder="Например: требуется диагностика контроллера">Требуется первичная диагностика в мастерской.</textarea></div><div class="warning-callout"><b>!</b><span>После подтверждения велосипед станет недоступен для выдачи, а запись появится на экране ремонта.</span></div></div><div class="modal-footer"><button class="button button-outline" data-close-modal>Отмена</button><button class="button button-dark" id="confirm-repair">Отправить в ремонт</button></div>`);
  $("#confirm-repair").addEventListener("click", () => {
    const reason = $("#repair-reason").value; const comment = $("#repair-comment").value.trim() || "Комментарий не указан.";
    item.status = "repair"; item.starline.location = "мастерская";
    state.repairs.unshift({ id: `s${Date.now()}`, bikeId: item.id, status: "repair", type: "Ремонт", reason, start: "2 окт", comment });
    closeModal(); render(); showToast(`${item.code} отправлен в ремонт`, "Состояние парка и экран ремонта обновлены");
  });
}

function showDemoNotice(title, text) {
  openModal(`<div class="modal-head"><div><h2>${title}</h2><p>Граница первой итерации</p></div><button class="modal-close" data-close-modal aria-label="Закрыть">×</button></div><div class="modal-body"><div class="warning-callout"><b>i</b><span>${text}</span></div><div class="demo-callout">Интерфейс не создаёт впечатление, что неподтверждённый процесс уже работает.</div></div><div class="modal-footer"><button class="button button-dark" data-close-modal>Понятно</button></div>`);
}

function showToast(title, text) {
  const toast = document.createElement("div"); toast.className = "toast"; toast.innerHTML = `<i>✓</i><div><strong>${title}</strong><span>${text}</span></div>`; $("#toast-region").append(toast); setTimeout(() => toast.remove(), 4200);
}

function updateNavCounts() {
  $("#nav-rentals-count").textContent = state.rentals.filter((item) => item.status !== "completed").length;
  $("#nav-service-count").textContent = state.repairs.filter((item) => item.status !== "done").length;
}

$("#today").textContent = new Intl.DateTimeFormat("ru-RU", { weekday: "short", day: "numeric", month: "long" }).format(demoToday);
$("#mobile-menu").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
window.addEventListener("hashchange", render);
if (!location.hash) location.hash = "#/dashboard"; else render();
