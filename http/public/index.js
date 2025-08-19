// Inferred skills from our conversation (customize freely)
const skills = [
  "Node.js Streams & Web Streams",
  "Busboy (multipart/form-data)",
  "Next.js (App Router, revalidatePath/revalidateTag)",
  "React + TypeScript",
  "PDF embedding & PDF.js",
  "Linux camera & audio (ffmpeg, v4l2)",
  "Cisco CLI & Packet Tracer",
  "Git workflows (restore, diffs)",
  "JavaScript utilities (arrays, objects)",
  "Data generation & JSON fixtures"
];

const insights = [
  "You learn by doing—your questions are surgical and practical.",
  "You bridge web dev with systems/networking—rare and powerful combo.",
  "You chase ‘how it actually works’, not just surface-level APIs.",
  "You think about UX and DX: PDFs, fullscreen, caching, and clean code.",
  "You’re comfortable switching stacks: frontend ↔ backend ↔ infra."
];

function mountPills() {
  const ul = document.getElementById("skill-pills");
  ul.innerHTML = "";
  skills.forEach(label => {
    const li = document.createElement("li");
    const dot = document.createElement("span");
    dot.className = "dot";
    li.appendChild(dot);
    li.appendChild(document.createTextNode(label));
    ul.appendChild(li);
  });
}

function randomInsight() {
  return insights[Math.floor(Math.random() * insights.length)];
}

// Typewriter effect for the dynamic line
async function typeLine(text, el, speed = 20) {
  el.textContent = "";
  for (let i = 0; i < text.length; i++) {
    el.textContent += text[i];
    await new Promise(r => setTimeout(r, speed));
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  mountPills();

  const line = document.getElementById("dynamic-line");
  await typeLine(randomInsight(), line);

  document.getElementById("shuffle").addEventListener("click", async () => {
    await typeLine(randomInsight(), line);
  });
});
