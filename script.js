const button = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const title = document.getElementById("birthdayTitle");

let opened = false;

button.addEventListener("click", () => {

    if(opened) return;
    opened = true;

    envelope.classList.add("open");

    setTimeout(() => {
        title.classList.add("show");
    }, 1200);

    createConfetti();
    createBalloons();
    createParticles();
});

function createConfetti(){

    const colors = [
        "#d4b06a",
        "#efe7dc",
        "#a9b7a3",
        "#ffffff"
    ];

    for(let i=0;i<180;i++){

        const piece = document.createElement("div");

        piece.style.position = "fixed";
        piece.style.width = "8px";
        piece.style.height = "14px";

        piece.style.left =
            Math.random() * window.innerWidth + "px";

        piece.style.top = "-20px";

        piece.style.background =
            colors[Math.floor(Math.random()*colors.length)];

        piece.style.borderRadius = "2px";

        piece.style.zIndex = "999";

        document.body.appendChild(piece);

        const duration = 4000 + Math.random()*3000;

        piece.animate([
            {
                transform:
                `translate(0,0) rotate(0deg)`
            },
            {
                transform:
                `translate(${(Math.random()-0.5)*300}px,
                ${window.innerHeight+200}px)
                rotate(${Math.random()*720}deg)`
            }
        ],{
            duration:duration,
            easing:"cubic-bezier(.17,.67,.35,1)",
            fill:"forwards"
        });

        setTimeout(()=>{
            piece.remove();
        },duration);
    }
}

function createBalloons(){

    const colors = [
        "#d7c7b4",
        "#a9b7a3",
        "#ffffff"
    ];

    for(let i=0;i<16;i++){

        const balloon =
            document.createElement("div");

        balloon.style.position="fixed";

        balloon.style.width =
            (50+Math.random()*30)+"px";

        balloon.style.height =
            (70+Math.random()*40)+"px";

        balloon.style.borderRadius="50%";

        balloon.style.background =
            colors[Math.floor(Math.random()*colors.length)];

        balloon.style.bottom="-120px";

        balloon.style.left=
            Math.random()*window.innerWidth+"px";

        balloon.style.zIndex="500";

        balloon.style.boxShadow=
            "0 10px 25px rgba(0,0,0,.12)";

        document.body.appendChild(balloon);

        const duration =
            8000 + Math.random()*4000;

        balloon.animate([
            {
                transform:"translateY(0)"
            },
            {
                transform:
                `translate(
                    ${(Math.random()-0.5)*200}px,
                    -${window.innerHeight+300}px
                )`
            }
        ],{
            duration:duration,
            easing:"linear",
            fill:"forwards"
        });

        setTimeout(()=>{
            balloon.remove();
        },duration);
    }
}

function createParticles(){

    for(let i=0;i<40;i++){

        const star =
            document.createElement("div");

        star.style.position="fixed";
        star.style.width="4px";
        star.style.height="4px";
        star.style.borderRadius="50%";

        star.style.background="#d4b06a";

        star.style.left=
            Math.random()*window.innerWidth+"px";

        star.style.top=
            Math.random()*window.innerHeight+"px";

        star.style.opacity="0";

        document.body.appendChild(star);

        star.animate([
            {opacity:0},
            {opacity:1},
            {opacity:.2},
            {opacity:1}
        ],{
            duration:2000+Math.random()*3000,
            iterations:Infinity
        });
    }
}
