import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPromt = surpriseMePrompts[randomIndex];

  // not to get same prompt in a row
  if (randomPromt === prompt) return getRandomPrompt(prompt);

  return randomPromt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
