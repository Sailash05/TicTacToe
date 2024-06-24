var arr = new Array(9).fill(null);
var player = "X";
var b = true;
function eval_func(event)
{
    var c = true;
    if(arr[0]==arr[1] && arr[1]==arr[2] && arr[0]!=null)
    {
        event.target.parentElement.parentElement.querySelector('.des').textContent = "winner player "+arr[0];
        c=false;
    }
    if(arr[3]==arr[4] && arr[4]==arr[5] && arr[3]!=null)
    {
        event.target.parentElement.parentElement.querySelector('.des').textContent = "winner player "+arr[3];
        c=false;
    }
    if(arr[6]==arr[7] && arr[7]==arr[8] && arr[6]!=null)
    {
        event.target.parentElement.parentElement.querySelector('.des').textContent = "winner player "+arr[6];
        c=false;
    }
    if(arr[0]==arr[3] && arr[3]==arr[6] && arr[0]!=null)
    {
        event.target.parentElement.parentElement.querySelector('.des').textContent = "winner player "+arr[0];
        c=false;
    }
    if(arr[1]==arr[4] && arr[4]==arr[7] && arr[1]!=null)
    {
        event.target.parentElement.parentElement.querySelector('.des').textContent = "winner player "+arr[1];
        c=false;
    }
    if(arr[2]==arr[5] && arr[5]==arr[8] && arr[2]!=null)
    {
        event.target.parentElement.parentElement.querySelector('.des').textContent = "winner player "+arr[2];
        c=false;
    }
    if(arr[0]==arr[4] && arr[4]==arr[8] && arr[0]!=null)
    {
        event.target.parentElement.parentElement.querySelector('.des').textContent = "winner player "+arr[0];
        c=false;
    }
    if(arr[2]==arr[4] && arr[4]==arr[6]  && arr[2]!=null)
    {
        event.target.parentElement.parentElement.querySelector('.des').textContent = "winner player "+arr[2];
        c=false;
    }
    for(let i = 0; i<9 ; i++)
    {
        if(arr[i] == null)
        {
            c = false;
            break;
        }
    }
    if(c==true)
    {
        event.target.parentElement.parentElement.querySelector('.des').textContent = "Tied!";
        b=false;
    }
    if(event.target.parentElement.parentElement.querySelector('.des').textContent == "winner player X" || event.target.parentElement.parentElement.querySelector('.des').textContent == "winner player O" || event.target.parentElement.parentElement.querySelector('.des').textContent == "Tied!")
    {
        b=false;
    }
}
function input_func(event)
{
    if(b)
    {
    var a = event.target.parentElement.querySelectorAll(".ans");
    var pos = Array.from(a).indexOf(event.target); 
    if(arr[pos]==null)
    {
        event.target.parentElement.parentElement.querySelector('.des').textContent = "";
        event.target.textContent = player;
        arr[pos] = player;
        eval_func(event);
        if(player == "X")
        {
            player = "O";
            event.target.parentElement.parentElement.querySelector('.player').textContent = "Player : O";
        }
        else
        {
            player = "X";
            event.target.parentElement.parentElement.querySelector('.player').textContent = "Player : X";
        }
    }
    else
    {
        event.target.parentElement.parentElement.querySelector('.des').textContent = "Wrong Input!";
    }}
}
var ab = document.querySelectorAll('.ans');
function reset_func()
{
    for(let i = 0 ; i<9 ; i++)
    {
        arr[i]=null;
    }
    
    for(var i= 0; i<9; i++)
    {
        ab[i].textContent = "";
    }
    document.querySelector('.player').textContent = "Player : X";
    document.querySelector('.des').textContent = "";
    player = "X";
    b = true;
    if(window.innerWidth < 700)
    {
        display_func();
    }
    else
    {
        if(document.querySelector('.customization').style.display == "block")
        {
            customization_func();
        }
        if(document.querySelector('.credit_box').style.display == "block")
        {
            credit_func();
        }
    }
    
}
function color_func(abcd)
{
    for(let i = 0 ; i<9 ; i++)
    {
        ab[i].style.backgroundColor = abcd;
    }
}
function exit_func()
{
    history.back();
}


