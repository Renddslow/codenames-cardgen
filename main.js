const CARD_WIDTH = 360;
const CARD_HEIGHT = 280;

const createCircleIcon = (slot, ctx) => {};

const createDiamondIcon = (slot, ctx) => {};

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
  ctx.save();
  ctx.fillStyle = color;
  // draw rounded rect
  ctx.beginPath();
  ctx.moveTo(slot.x + 10, slot.y);
  ctx.lineTo(slot.x + slot.width - 10, slot.y);
  ctx.arcTo(slot.x + slot.width, slot.y, slot.x + slot.width, slot.y + 10, 8);
  ctx.lineTo(slot.x + slot.width, slot.y + slot.height - 10);
  ctx.arcTo(
    slot.x + slot.width,
    slot.y + slot.height,
    slot.x + slot.width - 10,
    slot.y + slot.height,
    8,
  );
  ctx.lineTo(slot.x + 10, slot.y + slot.height);
  ctx.arcTo(slot.x, slot.y + slot.height, slot.x, slot.y + slot.height - 10, 8);
  ctx.lineTo(slot.x, slot.y + 10);
  ctx.arcTo(slot.x, slot.y, slot.x + 10, slot.y, 8);
  ctx.closePath();
  ctx.fillStyle = getColor(color);
  ctx.fill();
  ctx.restore();
};

(() => {
  const cvs = document.getElementById("canvas");
  const ctx = cvs.getContext("2d");

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

  createBlock("red", { x: 80, y: 80, width: 40, height: 40 }, ctx);
})();
