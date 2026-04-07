// 🌟 Added 'endTime' to calculate the Active Nakatha accurately 🌟
const nakathData = [
    { title: "නව සඳ බැලීම", time: new Date("2026-03-20T00:00:00+05:30"), endTime: new Date("2026-03-20T23:59:59+05:30"), icon: "fa-moon", colorClass: "bg-[#7c3aed]", direction: null, color: null, desc: "අභිනව චන්ද්‍ර වර්ෂය සඳහා මාර්තු 20 ද, සූර්ය වර්ෂය සඳහා අප්‍රේල් 19 ද නව සඳ බැලීම මැනවි." },
    { title: "පරණ අවුරුද්දට ස්නානය", time: new Date("2026-04-13T00:00:00+05:30"), endTime: new Date("2026-04-13T23:59:59+05:30"), icon: "fa-droplet", colorClass: "bg-[#0ea5e9]", direction: null, color: null, desc: "අප්‍රේල් 13, සඳුදා දිවුල් පත් යුෂ මිශ්‍ර නානු ගා ස්නානය කොට ඉෂ්ට දේවතා අනුස්මරණයේ යෙදීම මැනවි." },
    { title: "අලුත් අවුරුදු උදාව", time: new Date("2026-04-14T09:32:00+05:30"), endTime: new Date("2026-04-14T10:32:00+05:30"), icon: "fa-sun", colorClass: "bg-[#f59e0b]", direction: null, color: null, desc: "අප්‍රේල් 14, අඟහරුවාදා පෙරභාග 09:32 ට සිංහල අලුත් අවුරුද්ද උදාවෙයි." },
    { title: "පුණ්‍ය කාලය", time: new Date("2026-04-14T03:08:00+05:30"), endTime: new Date("2026-04-14T15:56:00+05:30"), icon: "fa-star", colorClass: "bg-[#8b5cf6]", direction: null, color: null, desc: "අප්‍රේල් 14, පෙරභාග 03:08 සිට අපරභාග 03:56 දක්වා පුණ්‍ය කාලය වන බැවින් ආගමික වතාවත් වල නිරත වීම මැනවි." },
    { title: "ආහාර පිසීම", time: new Date("2026-04-14T10:51:00+05:30"), endTime: new Date("2026-04-14T11:51:00+05:30"), icon: "fa-fire", colorClass: "bg-[#ef4444]", direction: "දකුණු", dirIcon: "fa-arrow-down", color: "රක්ත වර්ණ", colorHex: "#dc2626", desc: "අප්‍රේල් 14, පෙරභාග 10:51 ට රක්ත වර්ණ වස්ත්‍රාභරණයෙන් සැරසී දකුණු දිශාව බලා ලිප් බැඳ ගිණි මොලවා ආහාර පිසීම මැනවි." },
    { title: "වැඩ ඇල්ලීම හා ගනුදෙනු", time: new Date("2026-04-14T12:06:00+05:30"), endTime: new Date("2026-04-14T14:06:00+05:30"), icon: "fa-briefcase", colorClass: "bg-[#10b981]", direction: "දකුණු", dirIcon: "fa-arrow-down", color: "රක්ත වර්ණ", colorHex: "#dc2626", desc: "අප්‍රේල් 14, අපරභාග 12:06 ට රක්ත වර්ණ වස්ත්‍රාභරණයෙන් සැරසී දකුණු දිශාව බලා සියලු වැඩ අල්ලා ගනුදෙනු කිරීම මැනවි." },
    { title: "හිසතෙල් ගෑම", time: new Date("2026-04-15T06:55:00+05:30"), endTime: new Date("2026-04-15T08:55:00+05:30"), icon: "fa-droplet", colorClass: "bg-[#06b6d4]", direction: "නැගෙනහිර", dirIcon: "fa-arrow-right", color: "පච්ච වර්ණ", colorHex: "#84cc16", desc: "අප්‍රේල් 15, පෙරභාග 06:55 ට නැගෙනහිර දිශාව බලා හිසට කොහොඹ පත්ද, පයට කොළොන් පත්ද තබා තෙල් ගා ස්නානය කිරීම මැනවි." },
    { title: "රැකී රක්ෂා සඳහා පිටත්වීම", time: new Date("2026-04-20T06:27:00+05:30"), endTime: new Date("2026-04-20T08:27:00+05:30"), icon: "fa-person-walking-luggage", colorClass: "bg-[#6366f1]", direction: "දකුණු", dirIcon: "fa-arrow-down", color: "ශ්වේත වර්ණ", colorHex: "#ffffff", desc: "අප්‍රේල් 20, පෙරභාග 06:27 ට ශ්වේත වර්ණ වස්ත්‍රාභරණයෙන් සැරසී කිරිබත් සහ කැවිලි අනුභව කර දකුණු දිශාව බලා පිටත් වීම මැනවි." },
    { title: "පැළ සිටුවීම", time: new Date("2026-04-23T09:01:00+05:30"), endTime: new Date("2026-04-23T11:01:00+05:30"), icon: "fa-leaf", colorClass: "bg-[#22c55e]", direction: "උතුරු", dirIcon: "fa-arrow-up", color: "රන්වන් පැහැති", colorHex: "#fbbf24", desc: "අප්‍රේල් 23, පෙරභාග 09:01 ට රන්වන් පැහැති වස්ත්‍රාභරණයෙන් සැරසී උතුරු දිශාව බලා පැළ සිටුවීම මැනවි." }
];

function renderCards() {
    const grid = document.getElementById('nakath-grid');
    if(!grid) return;
    grid.innerHTML = ''; 

    nakathData.forEach((nakath, index) => {
        let timeDisplay = '';
        if (nakath.time.getHours() !== 0) {
            const timeStr = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Colombo', hour: '2-digit', minute: '2-digit', hour12: true }).format(nakath.time);
            timeDisplay = `<div class="mt-5 pt-4 border-t border-slate-100 flex justify-between items-center">
                <span class="font-poppins text-[14px] font-bold text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200"><i class="fa-regular fa-clock mr-2 text-blue-500"></i> ${timeStr}</span>
                <button onclick="addToCalendar('${nakath.title}', '${nakath.time.toISOString()}')" class="text-blue-500 hover:text-blue-700 transition transform hover:scale-110"><i class="fa-regular fa-calendar-plus text-2xl"></i></button>
            </div>`;
        }

        let extras = '';
        if(nakath.direction || nakath.color) {
            extras = `<div class="flex gap-6 mt-4 mb-4">`;
            if(nakath.direction) {
                extras += `<div class="font-sans text-[14px] text-slate-700 font-semibold flex items-center gap-2"><i class="fa-solid ${nakath.dirIcon} text-blue-500"></i> ${nakath.direction}</div>`;
            }
            if(nakath.color) {
                let borderObj = nakath.colorHex === '#ffffff' ? 'border border-gray-300' : '';
                extras += `<div class="font-sans text-[14px] text-slate-700 font-semibold flex items-center gap-2"><div class="w-4 h-4 rounded-full ${borderObj} shadow-sm" style="background-color: ${nakath.colorHex};"></div> ${nakath.color}</div>`;
            }
            extras += `</div>`;
        }

        const card = document.createElement('div');
        // Gave an ID to dynamically update the active state later
        card.id = `nakath-card-${index}`;
        card.className = 'nakath-card flex flex-col h-full reveal-on-scroll';
        card.style.transitionDelay = `${(index % 3) * 80}ms`;
        
        card.innerHTML = `
            <div class="flex items-center gap-4 mb-2 relative">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-[20px] shadow-sm ${nakath.colorClass} flex-shrink-0">
                    <i class="fa-solid ${nakath.icon}"></i>
                </div>
                <h3 class="font-yaldevi text-[1.6rem] font-bold text-slate-900 leading-tight">${nakath.title}</h3>
                
                <div id="badge-${index}" class="absolute top-0 right-0"></div>
            </div>
            ${extras}
            <p class="font-abhaya text-slate-600 text-[1.15rem] leading-relaxed flex-grow mt-2 font-semibold">
                ${nakath.desc}
            </p>
            ${timeDisplay}
        `;
        grid.appendChild(card);
    });
}

function updateTimer() {
    const now = new Date();
    
    // 1. Update Countdown Timer
    const target = nakathData[2].time; // Awurudu Udawa
    if (target > now) {
        document.getElementById('next-nakath-name').innerHTML = `අලුත් අවුරුදු උදාවට තව:`;
        const diff = target - now;
        document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        document.getElementById('hours').innerText = Math.floor((diff / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
        document.getElementById('minutes').innerText = Math.floor((diff / 1000 / 60) % 60).toString().padStart(2, '0');
        document.getElementById('seconds').innerText = Math.floor((diff / 1000) % 60).toString().padStart(2, '0');
    }

    // 2. Feature 1: Check and mark Active Nakatha
    nakathData.forEach((nakath, index) => {
        const card = document.getElementById(`nakath-card-${index}`);
        const badge = document.getElementById(`badge-${index}`);
        if(card && badge) {
            if (now >= nakath.time && now <= nakath.endTime) {
                card.classList.add('active-nakath');
                badge.innerHTML = `<span class="bg-red-500 text-white font-yaldevi px-3 py-1 rounded-full text-xs shadow-md shadow-red-500/30 animate-pulse"><i class="fa-solid fa-fire mr-1"></i> දැන් ක්‍රියාත්මකයි</span>`;
            } else {
                card.classList.remove('active-nakath');
                badge.innerHTML = '';
            }
        }
    });
}

// 🌟 Feature 3: Recipes Accordion Toggle 🌟
function toggleRecipe(id) {
    const content = document.getElementById(id);
    const icon = document.getElementById('icon-' + id);
    
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.style.transform = 'rotate(0deg)';
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.style.transform = 'rotate(180deg)';
    }
}

function addToCalendar(title, isoString) {
    const start = isoString.replace(/-|:|\.\d\d\d/g, "");
    const d = new Date(isoString);
    const end = new Date(d.getTime() + 30*60000).toISOString().replace(/-|:|\.\d\d\d/g, "");
    window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("නැකත: " + title)}&dates=${start}/${end}`, '_blank');
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
}

// Share
function shareFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'facebook-share-dialog', 'width=600,height=400');
}
function shareWhatsApp() { 
    window.open(`https://wa.me/?text=${encodeURIComponent("සිංහල හින්දු අලුත් අවුරුදු නැකත් වේලාවන් 2026 \n" + window.location.href)}`); 
}
function copyLink() { 
    navigator.clipboard.writeText(window.location.href); alert("Link Copied Successfully!"); 
}

const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) scrollTopBtn.classList.add("visible");
    else scrollTopBtn.classList.remove("visible");
};
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// Init
renderCards();
setInterval(updateTimer, 1000);
updateTimer();
setTimeout(initScrollAnimations, 100);