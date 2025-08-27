function typeWriter(el, texts, speed = 100, loop = false) {
  let i = 0, j = 0, isDeleting = false;

  // buat elemen teks & cursor
  const textSpan = document.createElement("span");
  const cursor = document.createElement("span");
  cursor.classList.add("typing-cursor");
  el.appendChild(textSpan);
  el.appendChild(cursor);

  function typing() {
    const currentText = texts[j];
    textSpan.textContent = currentText.substring(0, i);

    if (!isDeleting) {
      if (i < currentText.length) {
        i++;
        setTimeout(typing, speed);
      } else if (loop) {
        isDeleting = true;
        setTimeout(typing, speed * 2);
      }
    } else {
      if (i > 0) {
        i--;
        setTimeout(typing, speed / 2);
      } else {
        isDeleting = false;
        j = (j + 1) % texts.length;
        setTimeout(typing, speed);
      }
    }
  }

  typing();
}

// Pemakaian
typeWriter(document.getElementById("typing1"), ["Hey, I'm Ahmad Irfan Su'aidy"], 125, false);
setTimeout(() => {
  typeWriter(document.getElementById("typing2"), ["Debugging Life One Line at a Time"], 120, true);
}, 3500);