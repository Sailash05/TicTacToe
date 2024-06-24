var c_box = document.querySelector('.credit_box');
var play = document.querySelector('.player');
var board = document.querySelector('.board');
var des = document.querySelector('.des');
var customization = document.querySelector('.customization');
var check = true;
var temporary = 1;

c_box.style.display = "none";
function credit_func()
{
    if(c_box.style.display == "none")
    {
        c_box.style.display = "block";
        play.style.display = "none";
        board.style.display = "none";
        des.style.display = "none";
        customization.style.display = "none";
        if(window.innerWidth < 700)
        {
            display_func();
        }
    }
    else
    {
        customization.style.display = "none";
        c_box.style.display = "none";
        play.style.display = "block";
        board.style.display = "flex";
        des.style.display = "block";
    }
}
var col = document.querySelector('.color_select');
var small_block = document.querySelectorAll('.small_block');
function preview_func()
{
    for(let i=0 ; i<9; i++)
    {
        small_block[i].style.backgroundColor = col.value;
    }
}
customization.style.display = "none";
function customization_func()
{
    if(customization.style.display == "none")
    {
        c_box.style.display = "none";
        play.style.display = "none";
        board.style.display = "none";
        des.style.display = "none";
        customization.style.display = "block";
        if(window.innerWidth < 700)
        {
            display_func();
        }
    }
    else
    {
        customization.style.display = "none";
        c_box.style.display = "none";
        play.style.display = "block";
        board.style.display = "flex";
        des.style.display = "block";
    }
}
function change_func()
{
    color_func(col.value);
    customization_func();
} 


var reset_btn = document.querySelector('.reset_btn');
var custom = document.querySelector('.custom');
var credit = document.querySelector('.credit');
var exit_btn = document.querySelector('.exit_btn');

function display_func()
{
    if(check)
    {
        reset_btn.style.display = "block";
        custom.style.display = "block";
        credit.style.display = "block";
        exit_btn.style.display = "block";
        check = false;
    }
    else
    {
        reset_btn.style.display = "none";
        custom.style.display = "none";
        credit.style.display = "none";
        exit_btn.style.display = "none";
        check = true;
    }
}