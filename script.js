const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const birthday = document.getElementById("birthday");

let opened = false;

openBtn.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    envelope.classList.add("open");

    setTimeout(() => {
        birthday.classList.add("show");
    }, 1000);

    createConfetti();
    createBalloons();
    createParticles();
});

/* KONFETTI */

function createConfetti(){

    const container =
        document.getElementById("confetti");

    const colors = [
        "#d7b36a",
        "#b8c4b1",
        "#f4eee7",
        "#ffffff"
    ];

    for(let i=0;i<140;i++){

        const piece =
            document.createElement("div");

        piece.style.position="absolute";

        piece.style.width="8px";
        piece.style.height="14px";

        piece.style.left=
            Math.random()*100+"vw";

        piece.style.top="-20px";

        piece.style.background=
            colors[Math.floor(
                Math.random()*colors.length
            )];

        piece.style.borderRadius="3px";

        container.appendChild(piece);

        const duration =
            3000 + Math.random()*3000;

        piece.animate([
            {
                transform:
                "translateY(0) rotate(0deg)"
            },
            {
                transform:
                `translate(
                ${(Math.random()-0.5)*300}px,
                ${window.innerHeight+200}px)
                rotate(${Math.random()*720}deg)`
            }
        ],{
            duration:duration,
            easing:"ease-out",
            fill:"forwards"
        });
    }
}

/* BALONY */

function createBalloons(){

    const container =
        document.getElementById("balloons");

    const colors = [
        "#d7c7b4",
        "#b8c4b1",
        "#ffffff"
    ];

    for(let i=0;i<12;i++){

        const balloon =
            document.createElement("div");

        balloon.style.position="absolute";

        balloon.style.width=
            60 + Math.random()*25 + "px";

        balloon.style.height=
            80 + Math.random()*25 + "px";

        balloon.style.borderRadius="50%";

        balloon.style.background=
            colors[Math.floor(
                Math.random()*colors.length
            )];

        balloon.style.boxShadow=
            "0 10px 25px rgba(0,0,0,.12)";

        balloon.style.left=
            Math.random()*100+"vw";

        balloon.style.bottom="-150px";

        /* połysk */

        const shine =
            document.createElement("div");

        shine.style.position="absolute";
        shine.style.width="20%";
        shine.style.height="20%";
        shine.style.left="20%";
        shine.style.top="15%";

        shine.style.background=
            "rgba(255,255,255,.45)";

        shine.style.borderRadius="50%";

        balloon.appendChild(shine);

        /* sznurek */

        const string =
            document.createElement("div");

        string.style.position="absolute";
        string.style.left="50%";
        string.style.top="100%";

        string.style.width="2px";
        string.style.height="55px";

        string.style.background=
            "rgba(100,100,100,.4)";

        balloon.appendChild(string);

        /* serpentyna */

        const ribbon =
            document.createElement("div");

        ribbon.style.position="absolute";

        ribbon.style.left="50%";
        ribbon.style.top="155%";

        ribbon.style.width="18px";
        ribbon.style.height="70px";

        ribbon.style.borderLeft=
            "2px solid #d7b36a";

        ribbon.style.borderRadius="50%";

        balloon.appendChild(ribbon);

        container.appendChild(balloon);

        const duration =
            9000 + Math.random()*4000;

        balloon.animate([
            {
                transform:"translateY(0)"
            },
            {
                transform:
                `translate(
                    ${(Math.random()-0.5)*180}px,
                    -${window.innerHeight+400}px
                )`
            }
        ],{
            duration:duration,
            easing:"linear",
            fill:"forwards"
        });
    }
}

/* DROBINKI */

function createParticles(){

    const container =
        document.getElementById("particles");

    for(let i=0;i<40;i++){

        const dot =
            document.createElement("div");

        dot.style.position="absolute";

        dot.style.width="4px";
        dot.style.height="4px";

        dot.style.borderRadius="50%";

        dot.style.background="#d7b36a";

        dot.style.left=
            Math.random()*100+"vw";

        dot.style.top=
            Math.random()*100+"vh";

        container.appendChild(dot);

        dot.animate([
            {opacity:.2},
            {opacity:1},
            {opacity:.3}
        ],{
            duration:
            2000 + Math.random()*3000,
            iterations:Infinity
        });
    }
}
