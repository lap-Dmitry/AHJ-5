const pupover = document.createElement('div');
const button = document.querySelector('button');

pupover.className = 'pupover';
pupover.innerHTML = ` <div class="pupover__title">Popover title</div>
                      <div class="pupover__text">And here's somw amazing content. It's <br> very engaging. Right?</div>
                    `;
button.offsetParent.appendChild(pupover);

button.addEventListener('click', () => {
  pupover.classList.toggle('show');
  pupover.style.top = `${button.offsetTop - pupover.offsetHeight - 10}px`;
  pupover.style.left = `${button.offsetLeft + button.offsetWidth / 2 - pupover.offsetWidth / 2}px`;
});
