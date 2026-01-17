const bg = document.getElementById("background");
const title = document.getElementById("title");
const text = document.getElementById("text");
const choicesEl = document.getElementById("choices");

function setScene(scene) {
  bg.style.backgroundImage = `url(images/${scene.bg})`;
  title.textContent = scene.title;
  text.textContent = scene.text;

  choicesEl.innerHTML = "";
  if (!scene.choices || scene.choices.length === 0) return;

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.type = "button";
    btn.textContent = choice.label;
    btn.onclick = () => setScene(scenes[choice.next]);
    choicesEl.appendChild(btn);
  });
}

const scenes = {
  start: {
    bg: "start.jpg",
    title: "역사 여행",
    text: "만나고 싶은 인물을 선택하세요.",
    choices: [
      { label: "윤동주 · 시로 시대를 걸은 길", next: "yoon" },
      { label: "유관순 · 저항의 현장을 걷는 길", next: "yu" }
    ]
  },

  yoon: {
    bg: "yoon.jpg",
    title: "윤동주의 길",
    text: "첫 여정을 선택하세요.",
    choices: [
      { label: "연희전문학교 · 사유가 머물던 교정", next: "campus" },
      { label: "하늘과 바람의 언덕 · 별을 올려다보는 밤", next: "hill" },
      { label: "서점 골목 · 문장들이 모이는 곳", next: "bookstreet" }
    ]
  },

  campus: {
    bg: "campus.jpg",
    title: "연희전문학교",
    text: "그가 지나던 교정에서, 오늘의 나는 어떤 문장을 남길까? 다음 행선지를 고르세요.",
    choices: [
      { label: "윤동주 문학관 · 시의 방으로", next: "museum" },
      { label: "서대문형무소 · 시대의 그림자 속으로", next: "prison" },
      { label: "도서관으로 돌아가기", next: "ending_yoon" }
    ]
  },

  hill: {
    bg: "campus.jpg",
    title: "하늘과 바람의 언덕",
    text: "짧은 산책 끝에 고요가 찾아옵니다. 다음 행선지를 고르세요.",
    choices: [
      { label: "윤동주 문학관", next: "museum" },
      { label: "서점 골목", next: "bookstreet" },
      { label: "도서관으로 돌아가기", next: "ending_yoon" }
    ]
  },

  bookstreet: {
    bg: "start.jpg",
    title: "서점 골목",
    text: "낡은 표지와 새 문장 사이에서, ‘나’는 어떤 길을 고를까?",
    choices: [
      { label: "윤동주 문학관", next: "museum" },
      { label: "연희전문학교", next: "campus" },
      { label: "도서관으로 돌아가기", next: "ending_yoon" }
    ]
  },

  museum: {
    bg: "yoon.jpg",
    title: "윤동주 문학관",
    text: "시의 숨결을 따라 걷습니다. 이제 여행을 마치고 도서관으로 돌아갈까요?",
    choices: [
      { label: "여행 마치기 (도서관으로)", next: "ending_yoon" }
    ]
  },

  yu: {
    bg: "yu.jpg",
    title: "유관순의 길",
    text: "첫 여정을 선택하세요.",
    choices: [
      { label: "아우내 장터 · 1919년의 외침", next: "market" },
      { label: "서대문형무소 · 저항의 흔적", next: "prison" },
      { label: "독립기념관 · 기록과 증언", next: "hall" }
    ]
  },

  market: {
    bg: "market.jpg",
    title: "아우내 장터",
    text: "함성이 울리던 자리를 걷습니다. 다음 행선지를 고르세요.",
    choices: [
      { label: "독립기념관", next: "hall" },
      { label: "서대문형무소", next: "prison" },
      { label: "도서관으로 돌아가기", next: "ending_yu" }
    ]
  },

  hall: {
    bg: "market.jpg",
    title: "독립기념관",
    text: "기록은 기억을 붙잡아줍니다. 다음 행선지를 고르세요.",
    choices: [
      { label: "서대문형무소", next: "prison" },
      { label: "아우내 장터", next: "market" },
      { label: "도서관으로 돌아가기", next: "ending_yu" }
    ]
  },

  prison: {
    bg: "prison.jpg",
    title: "서대문형무소",
    text: "역사의 무게가 느껴집니다. 이제 도서관으로 돌아가 엔딩을 확인하세요.",
    choices: [
      { label: "여행 마치기 (도서관으로)", next: "ending_shared" }
    ]
  },

  ending_yoon: {
    bg: "ending.jpg",
    title: "엔딩 · 윤동주의 길",
    text: "도서관으로 돌아왔습니다. 엔딩북: 「하늘과 바람과 별과 시 – 길 위의 기록」",
    choices: []
  },

  ending_yu: {
    bg: "ending.jpg",
    title: "엔딩 · 유관순의 길",
    text: "도서관으로 돌아왔습니다. 엔딩북: 「1919, 그날의 외침」",
    choices: []
  },

  ending_shared: {
    bg: "ending.jpg",
    title: "엔딩",
    text: "도서관으로 돌아왔습니다. 선택한 루트에 맞는 엔딩북을 확인하고 보상을 받아가세요!",
    choices: []
  }
};

setScene(scenes.start);
