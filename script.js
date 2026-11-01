const roleData = {
  fighter: {
    label: "对抗路",
    title: "能抗能打的正面压力",
    text: "适合喜欢单线博弈和关键开团的玩家。前期稳住兵线和换血，中期跟团或边带，后期寻找绕后进场机会。",
    points: ["先清兵再支援，不要丢太多塔下经济。", "团战前盯对方后排和关键控制技能。", "优势时带线牵制，劣势时守塔等队友。"],
    image: "assets/1.jpg",
    alt: "王者荣耀对抗路战斗截图",
  },
  jungle: {
    label: "打野",
    title: "带动全图节奏的发动机",
    text: "适合喜欢主动找机会的玩家。打野要规划刷野路线，判断哪一路能抓，哪条资源该控，什么时候带队友开团。",
    points: ["开局想好第一轮刷野方向，别无目的乱逛。", "抓人前先看兵线位置，队友跟不上就先控资源。", "拿到优势后入侵野区，让对手少一片发育空间。"],
    image: "assets/4.jpg",
    alt: "王者荣耀打野在野区战斗截图",
  },
  mage: {
    label: "中路",
    title: "用技能和视野改写团战",
    text: "适合喜欢支援和技能命中的玩家。中路清线快、转线频繁，是队伍前中期联动的关键位置。",
    points: ["快速清中线后支援边路，不要长期站在塔前发呆。", "团战前保留控制技能，用来限制刺客或先手开团。", "站位靠后输出，别为了消耗把自己交到危险位置。"],
    image: "assets/5.jpg",
    alt: "王者荣耀中路技能团战截图",
  },
  marksman: {
    label: "发育路",
    title: "后期输出的稳定核心",
    text: "适合喜欢走位、补经济和持续输出的玩家。前期稳住发育，后期团战就能成为队伍的火力中心。",
    points: ["前期少硬拼，补兵和吃塔下经济更重要。", "团战先保证距离，能打谁就先打谁。", "别单独走没视野的河道和野区入口。"],
    image: "assets/2.jpg",
    alt: "王者荣耀发育路英雄作战截图",
  },
  support: {
    label: "游走",
    title: "让队友更舒服地赢",
    text: "适合喜欢观察全局和保护队友的玩家。开视野、保后排、先手控制，很多胜负都藏在游走的选择里。",
    points: ["提前探草，别让核心输出先脸探视野。", "根据阵容判断是开团辅助还是保护辅助。", "和打野、中路一起动，节奏会比单人游走更强。"],
    image: "assets/3.jpg",
    alt: "王者荣耀游走英雄在地图移动截图",
  },
};

const tabs = document.querySelectorAll(".role-tab");
const roleImage = document.querySelector("#roleImage");
const roleLabel = document.querySelector("#roleLabel");
const roleTitle = document.querySelector("#roleTitle");
const roleText = document.querySelector("#roleText");
const rolePoints = document.querySelector("#rolePoints");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const role = roleData[tab.dataset.role];
    if (!role) return;

    tabs.forEach((item) => {
      item.classList.toggle("is-active", item === tab);
      item.setAttribute("aria-selected", String(item === tab));
    });

    roleImage.src = role.image;
    roleImage.alt = role.alt;
    roleLabel.textContent = role.label;
    roleTitle.textContent = role.title;
    roleText.textContent = role.text;
    rolePoints.replaceChildren(
      ...role.points.map((point) => {
        const item = document.createElement("li");
        item.textContent = point;
        return item;
      })
    );
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".section-observe").forEach((section) => {
  observer.observe(section);
});
