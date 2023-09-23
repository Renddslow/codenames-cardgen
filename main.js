const CARD_WIDTH = 360;
const CARD_HEIGHT = 280;

const createCircleIcon = (slot, ctx) => {
  ctx.save();
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(100 + (slot.x - 1) * 40, 79 + (slot.y - 1) * 40, 8, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.restore();
};

const createDiamondIcon = (slot, ctx) => {
  ctx.save();
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 2;
  ctx.strokeRect(92.5 + (slot.x - 1) * 40, 72 + (slot.y - 1) * 40, 15, 15);
  ctx.restore();
};

const createXIcon = (slot, ctx) => {
  ctx.save();
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(92.5 + (slot.x - 1) * 40, 72 + (slot.y - 1) * 40);
  ctx.lineTo(107.5 + (slot.x - 1) * 40, 87 + (slot.y - 1) * 40);
  ctx.moveTo(107.5 + (slot.x - 1) * 40, 72 + (slot.y - 1) * 40);
  ctx.lineTo(92.5 + (slot.x - 1) * 40, 87 + (slot.y - 1) * 40);
  ctx.stroke();
  ctx.restore();
};

const createSkullIcon = (slot, ctx) => {
  ctx.save();
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 2;
  ctx.beginPath();
  // draw skull icon
  ctx.stroke();
  ctx.restore();
};

const getColor = (color) => {
  switch (color) {
    case "red":
      return "#ff1d37";
    case "blue":
      return "#3592ff";
    case "black":
      return "#211f1f";
    default:
      return "#dcdca0";
  }
};

const createBlock = (color, slot, ctx) => {
  const SIZE = 30;

  ctx.save();
  ctx.fillStyle = color;
  // draw rounded rect
  ctx.strokeStyle = "#eee";
  ctx.lineWidth = 1;
  ctx.fillStyle = getColor(color);
  ctx.fillRect(85 + (slot.x - 1) * 40, 64 + (slot.y - 1) * 40, SIZE, SIZE);
  ctx.strokeRect(85 + (slot.x - 1) * 40, 64 + (slot.y - 1) * 40, SIZE, SIZE);
  if (color === "blue") {
    createCircleIcon(slot, ctx);
  } else if (color === "red") {
    createDiamondIcon(slot, ctx);
  } else if (color === "black") {
    createXIcon(slot, ctx);
  }
  ctx.restore();
};

const shuffle = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const drawBackground = (ctx) => {
  ctx.fillStyle = "#847964";
  ctx.fillRect(0, 0, 360, 280);

  ctx.beginPath();
  ctx.moveTo(80, 24);

  ctx.lineTo(80 + 10, 24 + 12);
  ctx.lineTo(CARD_WIDTH - (80 + 10), 24 + 12);
  ctx.lineTo(CARD_WIDTH - 80, 24);
  // Top right corner
  ctx.lineTo(CARD_WIDTH - 48, 24);
  ctx.arcTo(CARD_WIDTH - 24, 24, CARD_WIDTH - 24, 48, 24);
  ctx.lineTo(CARD_WIDTH - 24, 48);
  ctx.lineTo(CARD_WIDTH - 24, 80);
  // Right middle
  ctx.lineTo(CARD_WIDTH - 34, 80 + 12);
  ctx.lineTo(CARD_WIDTH - 34, CARD_HEIGHT - 80 - 12);
  ctx.lineTo(CARD_WIDTH - 24, CARD_HEIGHT - 80);
  // Bottom right corner
  ctx.lineTo(CARD_WIDTH - 24, CARD_HEIGHT - 48);
  ctx.arcTo(
    CARD_WIDTH - 24,
    CARD_HEIGHT - 24,
    CARD_WIDTH - 48,
    CARD_HEIGHT - 24,
    24,
  );
  ctx.lineTo(CARD_WIDTH - 48, CARD_HEIGHT - 24);
  ctx.lineTo(CARD_WIDTH - 80, CARD_HEIGHT - 24);
  // Bottom middle
  ctx.lineTo(CARD_WIDTH - (80 + 12), CARD_HEIGHT - 34);
  ctx.lineTo(80 + 12, CARD_HEIGHT - 34);
  ctx.lineTo(80, CARD_HEIGHT - 24);
  // Bottom left corner
  ctx.lineTo(48, CARD_HEIGHT - 24);
  ctx.arcTo(24, CARD_HEIGHT - 24, 24, CARD_HEIGHT - 48, 24);
  ctx.lineTo(24, CARD_HEIGHT - 48);
  ctx.lineTo(24, CARD_HEIGHT - 80);
  // Left middle
  ctx.lineTo(34, CARD_HEIGHT - (80 + 12));
  ctx.lineTo(34, 80 + 12);
  ctx.lineTo(24, 80);
  // Top left corner
  ctx.lineTo(24, 48);
  ctx.arcTo(24, 24, 48, 24, 24);
  ctx.lineTo(48, 24);
  ctx.lineTo(80, 24);
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#5d5341";
  ctx.stroke();
  ctx.fillStyle = "#6e6351";
  ctx.fill();

  // Rounded rectangle
  ctx.beginPath();
  ctx.moveTo(68, 50);
  ctx.lineTo(CARD_WIDTH - 68, 50);
  ctx.arcTo(CARD_WIDTH - 50, 50, CARD_WIDTH - 50, 68, 18);
  ctx.lineTo(CARD_WIDTH - 50, 68);
  ctx.lineTo(CARD_WIDTH - 50, CARD_HEIGHT - 68);
  ctx.arcTo(
    CARD_WIDTH - 50,
    CARD_HEIGHT - 50,
    CARD_WIDTH - 68,
    CARD_HEIGHT - 50,
    18,
  );
  ctx.lineTo(CARD_WIDTH - 68, CARD_HEIGHT - 50);
  ctx.lineTo(68, CARD_HEIGHT - 50);
  ctx.arcTo(50, CARD_HEIGHT - 50, 50, CARD_HEIGHT - 68, 18);
  ctx.lineTo(50, CARD_HEIGHT - 68);
  ctx.lineTo(50, 68);
  ctx.arcTo(50, 50, 68, 50, 18);
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#4f493a";
  ctx.fillStyle = "#262626";
  ctx.stroke();
  ctx.fill();
};

const createLight = (color, ctx) => {
  ctx.save();
  ctx.fillStyle = color === "blue" ? "#00d9ff" : "#ff001d";
  ctx.strokeStyle = "#4f493a";
  ctx.lineWidth = 4;
  ctx.strokeRect(40, 110, 20, 60);
  ctx.fillRect(40, 110, 20, 60);
  ctx.strokeRect(CARD_WIDTH - 60, 110, 20, 60);
  ctx.fillRect(CARD_WIDTH - 60, 110, 20, 60);
  ctx.restore();
};

(() => {
  const cvs = document.getElementById("canvas");
  const ctx = cvs.getContext("2d");

  drawBackground(ctx);

  const seed = new URL(window.location.href).searchParams.get("seed");

  let blueHasExtra;
  let cards;

  if (!seed) {
    blueHasExtra = Math.floor(Math.random() * 2);
    cards = shuffle([
      ...Array(blueHasExtra ? 8 : 7).fill("blue"),
      ...Array(blueHasExtra ? 7 : 8).fill("red"),
      ...Array(4).fill("blank"),
      "black",
    ]);

    const serialized = Uint8Array.from(
      cards.map((card) => {
        if (card === "blue") return 1;
        if (card === "red") return 2;
        if (card === "black") return 3;
        return 0;
      }),
    );

    let binary = "";
    for (const byte of serialized) {
      binary += String.fromCharCode(byte);
    }
    const base64 = btoa(binary);

    window.history.pushState({}, "", `?seed=${base64}`);
  } else {
    cards = Array.from(Uint8Array.from(atob(seed), (c) => c.charCodeAt(0))).map(
      (c) => {
        if (c === 1) return "blue";
        if (c === 2) return "red";
        if (c === 3) return "black";
        return "blank";
      },
    );
    blueHasExtra = cards.filter((c) => c === "blue").length === 8;
  }

  cards.forEach((card, i) => {
    const slot = {
      x: (i % 5) + 1,
      y: Math.floor(i / 5) + 1,
    };
    createBlock(card, slot, ctx);
  });

  createLight(blueHasExtra ? "blue" : "red", ctx);
  document.getElementById("url").value = window.location.href;

  document.querySelector(".copy").addEventListener("click", async () => {
    await navigator.clipboard.writeText(window.location.href);
  });

  document.querySelector(".create").addEventListener("click", () => {
    window.location.href = "/";
  });
})();
