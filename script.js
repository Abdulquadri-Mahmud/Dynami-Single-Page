const menu_bar_cont = document.querySelector('.menu_bar_cont');
const open_menu = document.querySelector('.open_menu');
const close_menu = document.querySelector('.close_menu');

open_menu.addEventListener('click',()=>{
     open_menu.style.display = 'none';
     close_menu.style.display = 'block';

     menu_bar_cont.style.width = '200px';
});
close_menu.addEventListener('click',()=>{
     open_menu.style.display = 'block';
     close_menu.style.display = 'none';

     menu_bar_cont.style.width = '0px';
});

const tab1 = document.querySelector('.tab1');
const tab2 = document.querySelector('.tab2');
const tab3 = document.querySelector('.tab3');
const tab4 = document.querySelector('.tab4');

const sec_tab1 = document.querySelector('.sec_tab1');
const sec_tab2 = document.querySelector('.sec_tab2');
const sec_tab3 = document.querySelector('.sec_tab3');
const sec_tab4 = document.querySelector('.sec_tab4');

const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const page3 = document.querySelector('.page3');
const page4 = document.querySelector('.page4');

tab1.addEventListener('click',()=>{
     page1.style.display = 'block';
     page2.style.display = 'none';
     page3.style.display = 'none';
     page4.style.display = 'none';

});
tab2.addEventListener('click',()=>{
     page1.style.display = 'none';
     page2.style.display = 'block';
     page3.style.display = 'none';
     page4.style.display = 'none';

});
tab3.addEventListener('click',()=>{
     page1.style.display = 'none';
     page2.style.display = 'none';
     page3.style.display = 'block';
     page4.style.display = 'none';

});
tab4.addEventListener('click',()=>{
     page1.style.display = 'none';
     page2.style.display = 'none';
     page3.style.display = 'none';
     page4.style.display = 'block';

});

sec_tab1.addEventListener('click',()=>{
     page1.style.display = 'block';
     page2.style.display = 'none';
     page3.style.display = 'none';
     page4.style.display = 'none';

});
sec_tab2.addEventListener('click',()=>{
     page1.style.display = 'none';
     page2.style.display = 'block';
     page3.style.display = 'none';
     page4.style.display = 'none';

});
sec_tab3.addEventListener('click',()=>{
     page1.style.display = 'none';
     page2.style.display = 'none';
     page3.style.display = 'block';
     page4.style.display = 'none';

});
sec_tab4.addEventListener('click',()=>{
     page1.style.display = 'none';
     page2.style.display = 'none';
     page3.style.display = 'none';
     page4.style.display = 'block';

});

const date_text = document.querySelector('.date_text');

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const dates = date.getDate();
const day = date.getDay();

date_text.innerText = `Year: ${year}; Month: ${month+1}; Date: ${dates}; Week: ${day};`;