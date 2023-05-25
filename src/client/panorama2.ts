import { create_icon } from './navigation_icon';
import { scene } from './client';
import { panorama1, navicon1, infoicon1, infoicon1b } from './panorama1';
import { panorama3, navicon5 } from './panorama3';
import { panorama_form } from './panorama_create';
import { create_icon_right } from './navigation_icon_right';
import { navicon6, navicon7, panorama4 } from './panorama4';
import { invoDivClean } from './info_div_clean';
import { tytuly } from './tytuly';
import { teksty } from './teksty';
import { create_info_icon_left } from './info_icon_left';


//dodawanie panoramy
export const panorama2 = new panorama_form('./index.png').main
panorama2.rotateY(-140*(Math.PI/180))

//dodawanie ikony nawigacyjnej
export const navicon2 = new create_icon_right(-30, -15, 25, 'nav2');
export const navicon3 = new create_icon_right(40, -12, -10, 'nav3');
export const navicon9 = new create_icon(30, -10, 30, 'nav9');

//event-click ikony nawigacyjnej
navicon2.element.addEventListener('pointerdown', () => {
    console.log('navicon2')
    infoicon2.element.style.visibility='visible'
    panorama2.remove(navicon2.main);
    panorama2.remove(navicon3.main);
    panorama2.remove(navicon9.main)
    panorama2.remove(infoicon2.main)
    scene.remove(panorama2);
    scene.add(panorama3);
    panorama3.add(navicon5.main)
    navicon2.reset_size();
    navicon3.reset_size();
    infodiv2.main.style.visibility='hidden'
})

//event-click ikony nawigacyjnej
navicon3.element.addEventListener('pointerdown', () => {
    console.log("navicon3")
    infoicon2.element.style.visibility='visible'
    panorama2.remove(navicon2.main);
    panorama2.remove(navicon3.main);
    panorama2.remove(navicon9.main)
    panorama2.remove(infoicon2.main)
    scene.remove(panorama2);
    scene.add(panorama1);
    panorama1.add(navicon1.main)
    panorama1.add(infoicon1.main)
    panorama1.add(infoicon1b.main)
    navicon1.reset_size(); 
    infodiv2.main.style.visibility='hidden'
})

//event-click ikony nawigacyjnej
navicon9.element.addEventListener('pointerdown', () => {
    console.log("navicon3")
    infoicon2.element.style.visibility='visible'
    panorama2.remove(navicon2.main);
    panorama2.remove(navicon3.main);
    panorama2.remove(navicon9.main)
    panorama2.remove(infoicon2.main)
    scene.remove(panorama2);
    scene.add(panorama4);
    panorama4.add(navicon6.main)
    panorama4.add(navicon7.main)
    navicon9.reset_size(); 
    console.log("navicon9")
    infodiv2.main.style.visibility='hidden'
})

//dodawanie obrazka
const infodiv2 = new invoDivClean("120px", tytuly[2], teksty[2]);


//dodawanie ikony-obrazek
export const infoicon2 = new create_info_icon_left(30, -5, 20, 'imageInfo1')

//event-click ikony-obrazek
infoicon2.element.addEventListener('pointerdown', () => {
    console.log('pointer clicked');
    document.body.appendChild(infodiv2.main)
    infodiv2.main.style.visibility = 'visible';
    infoicon2.element.style.visibility = 'hidden';

    infodiv2.offButton.addEventListener("click", function () {
      infodiv2.main.style.visibility = 'hidden';
      infoicon2.element.style.visibility = 'visible';
    })
  
  })






