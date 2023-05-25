import { panorama2, navicon2, navicon3, navicon9, infoicon2 } from './panorama2';
import { scene } from './client';
import { panorama_form } from './panorama_create';
import { invoDivClean } from './info_div_clean';
import { teksty } from './teksty';
import { tytuly } from './tytuly';
import { create_icon_left } from './navigation_icon_left';
import { create_info_icon_left } from './info_icon_left';

//dodawanie panoramy
export const panorama1 = new panorama_form('./outside1.png').main;
panorama1.rotateY(-80 * (Math.PI / 180))

//dodawanie ikony nawigacyjnej
export const navicon1 = new create_icon_left(-30, -5, -16, 'nav1');
setTimeout(() => {
  panorama1.add(navicon1.main);
}, 1000)

//event-click ikony nawigacyjnej
navicon1.element.addEventListener('pointerdown', () => {
  infoicon1.element.style.visibility = 'visible'
  infoicon1b.element.style.visibility = 'visible'
  panorama1.remove(navicon1.main)
  panorama1.remove(infoicon1.main)
  panorama1.remove(infoicon1b.main)
  scene.remove(panorama1);
  scene.add(panorama2);
  panorama2.add(navicon2.main)
  panorama2.add(navicon3.main)
  panorama2.add(navicon9.main)
  panorama2.add(infoicon2.main)
  navicon1.reset_size();
  infodiv1.main.style.visibility = 'hidden'
  infodiv1b.main.style.visibility = 'hidden'

})

//dodawanie obrazka
const infodiv1 = new invoDivClean("200px", tytuly[0], teksty[0]);

//dodawanie ikony-obrazek
export const infoicon1 = new create_info_icon_left(-30, 20, -20, 'imageInfo1')
setTimeout(() => {
  panorama1.add(infoicon1.main)
}, 1000)

//event-click ikony-obrazek
infoicon1.element.addEventListener('pointerdown', () => {
  console.log('pointer clicked');
  document.body.appendChild(infodiv1.main)
  infodiv1.main.style.visibility = 'visible';
  infoicon1.element.style.visibility = 'hidden';
  infodiv1b.main.style.visibility = 'hidden';
  infoicon1b.element.style.visibility = 'visible';

  infodiv1.offButton.addEventListener("click", function () {
    infodiv1.main.style.visibility = 'hidden';
    infoicon1.element.style.visibility = 'visible';
  })

})

//dodawanie obrazka
const infodiv1b = new invoDivClean("150px", tytuly[1], teksty[1]);

//dodawanie ikony-obrazek
export const infoicon1b = new create_info_icon_left(-30, -10, -10, 'imageInfo1')
setTimeout(() => {
  panorama1.add(infoicon1b.main)
}, 1000)

//event-click ikony-obrazek
infoicon1b.element.addEventListener('pointerdown', () => {
  console.log('pointer clicked');
  document.body.appendChild(infodiv1b.main)
  infodiv1b.main.style.visibility = 'visible';
  infoicon1b.element.style.visibility = 'hidden';
  infodiv1.main.style.visibility = 'hidden';
  infoicon1.element.style.visibility = 'visible';

  infodiv1b.offButton.addEventListener("click", function () {
    infodiv1b.main.style.visibility = 'hidden';
    infoicon1b.element.style.visibility = 'visible';
  })

})



