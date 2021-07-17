/*
    create 20 questions for each number
    create answers for each question

*/
// create an object or an array
let qts = [
    {
        qt: 'A reference frame in which Newton\'s first law holds is called _____',
        a : 'classical frame',
        b : 'inertial reference frame',
        c : 'intrinsic reference frame',
        d : 'derived frame',
        // e : 'horizontal frame',
        name : 'one'
    },
    {
        qt: 'A body is said to be in translational equilibrium if the resultant forces acting on it is _____',
        a : 'large',
        b : 'small',
        c : 'zero',
        d : 'positive',
        // e : 'negative'
        name : 'two'
    },
    {
        qt: 'A footballer kicks a ball of mass 0.1kg and the diameter 16cm toward a goalpost. The ball rolls horizontally with translational velocity of 4m/s and moment of inertia of 6.4 X 10<sup>-4</sup>Kgms<sup>2</sup>. What is the total kinetic energy',
        a : '8.80J',
        b : '0.88J',
        c : '0.08J',
        d : '1.60J',
        // e : '0.16J'
        // ,
        name : 'three'
    },
    {
        qt: 'When the kinetic energy is zero during oscillation, the potential energy becomes',
        a : 'maximum',
        b : 'minimum',
        c : 'half of the total value',
        d : '1/3 of the total value'
        ,
        name : 'four'
    },
    {
        qt: 'In damped oscillation, the amplitude',
        a : 'remains constant',
        b : 'decreases progressively',
        c : 'equals the amplitude of free oscillation',
        d : 'increases progressively'
        ,
        name : 'five'
    },
    {
        qt: 'During forced oscillation, if the damping factor is negligibly small, we may have a situation known as',
        a : 'resonance',
        b : 'critical damping',
        c : 'heavy damping',
        d : 'under damping',
        name : 'six'
    },
    {
        qt: 'A body of mass 20kg is set in motion by two forces 3N and 4N, acting at right angles to each other. Determine the magnitude of its acceleration',
        a : '4.00ms<sup>-2</sup>',
        b : '2.89<sup>-2</sup>',
        c : '0.35ms<sup>-2</sup>',
        d : '0.25<sup>-2</sup>'
        ,
        name : 'seven'
        // type : 'motion'
    },
    {
        qt: 'The tendency of a body to remain at rest when a force is applied to it is called',
        a : 'impulse',
        b : 'momentum',
        c : 'inertia',
        d : 'retardation',
        // type : 'mechanics'
        name : 'eight'
    },
    {
        qt: 'One the following options best express the acceleration during simple harmonic motion',
        a : 'a = -<span>&omega;</span>y<sup>2</sup>',
        b : 'a <span>&NotEqual; &omega;<sup>2</sup></span>y',
        c : 'a = -<span>&omega;<sup>2</sup></span>y',
        d : 'a = <span>&omega;</span>y<sup>2</sup>',
        // type : 'mechanics'
        name : 'nine'
    },
    {
        qt : 'A body dropped from a certain height above the ground level falls with uniform',
        a : 'speed',
        b : 'velocity',
        c : 'acceleration',
        d : 'retardation',
        name : 'ten'
    },
    {
        qt : 'A wooden block of mass 1.6kg rests on a rough horizontal surface. If the limiting frictional force between the block and the surface is 8N, calculate the coefficient of fricition ( take g = 10ms<sup>-2</sup>)',
        a : '0.6',
        b : '0.5',
        c : '0.3',
        d : '0.2',
        name : 'eleven'
    },
    {
        qt : 'A plane inclined at 30<sup>&deg;</sup> to the horizontal has an efficiency of 50%. Calculate the force parallel to the plane required to push a load of 120N uniformly up the plane',
        a : '120N',
        b : '200.0N',
        c : '50.0N',
        d : '240.0N',
        name : 'twelve'
    },
    {
        qt : 'Calculate the torque on the rod acted by two forces of 50N each separated by a distance of 80cm',
        a : '40Nm',
        b : '50Nm',
        c : '80Nm',
        d : '60Nm',
        e : '20Nm',
        name : 'thirteen'
    },
    {
        qt : 'A beam of length 5m has a weight 200N hung at one end and 150N at the other end. Neglecting the weight of the beam itself, calculate the balance point of the beam',
        a : '2.00m',
        b : '1.98m',
        c : '2.14m',
        d : '1.80m',
        name : 'fourteen'
    },
    {
        qt : 'The laws of planetary motions were given by',
        a : 'Tycho Brahe',
        b : 'Isaac Newton',
        c : 'Johannes Kepler',
        d : 'John Kepler',
        // e : 'Nicolaus Copernicus'
        name : 'fifteen'
    },
    {
        qt : 'A system of two forces acting in opposite directions on a body constitutes ____',
        a : 'moment',
        b : 'resultant',
        c : 'torque',
        d : 'couple',
        name : 'sixteen'
        // e : 'all of the above'
    },
    {
        qt : 'The radius of gyration for a uniform sphere of mass 0.04kg and moment of inertia 6.4 <span>&times;</span> 10<sup>-2</sup>kgm<sup>2</sup> is',
        a : '2.00',
        b : '12.65',
        c : '16',
        d : '10',
        e : '25.3',
        name : 'seventeen'
    },
    {
        qt : 'The force F between the sun of mass M and the earth of mass m separated by a distance r is given as F = GMm/r<sup>2</sup>. Use dimensional analyses to obtain the dimension of G',
        a : 'L<sup>2</sup>MT<sup>-2</sup>',
        b : 'L<sup>3</sup>M<sup>-1</sup>T<sup>-2</sup>',
        c : 'L<sup>2</sup>M<sup>-1</sup>T<sup>2</sup>',
        d : 'L<sup>3</sup>M<sup>-1</sup>T<sup>-1</sup>',
        e : 'L<sup>2</sup>MT<sup>-2</sup>',
        name : 'eighteen'
    },
    {
        qt : 'A wheel has a radius of 4.1m. How far does a point on its circumference travel if the wheel is rotated through an angle of 30<span>&deg;</span>',
        a : '2.17m',
        b : '777.93m',
        c : '123m',
        d : '7.50m',
        name : 'nineteen'
        // e : '127.10m'
    },
    {
        qt : 'The SI unit of angular acceleration is given by',
        a : 'ms<sup>-2</sup>',
        b : 'ms<sup>-1</sup>',
        c : 'rads<sup>-2</sup>',
        d : 'rads<sup>-1</sup>',
        name : 'twenty'
    },
    {
        qt : 'The Young Modulus can be expressed as',
        a : 'stress/strain',
        b : 'Force/Area',
        c : 'extension/original length',
        d : 'force/length',
        name : 'twentyone'
    },
    {
        qt : 'Coefficient of surface tension is given by',
        a : 'stress/strain',
        b : 'Force/Area',
        c : 'extension/initial time',
        d : 'force/length',
        name : 'twentytwo'
    },
    {
        qt : 'The rate of change of angular momentum is known as',
        a : 'Moment of Inertia',
        b : 'Torque',
        c : 'Radius of gyration',
        d : 'Momentum',
        name : 'twentythree'
        // e : 'Force'
    },
    {
        qt : 'The total kinetic energy of a rigid body under the influence of torque is known as',
        a : '1/2I<span>&omega;<sup>2</sup></span>',
        b : 'I<span>&omega;<sup>2</sup></span>',
        c : 'I<span>&omega;</span>',
        d : '1/2I<span>&omega;</span>',
        name : 'twentyfour'
        // e : '2I<span>&omega;<sup>2</sup></span>'
    },
    {
        qt : 'The angular momentum of an object is given as <span>L = t<sup>3</sup> &minus; 6t<sup>2</sup> &plus; 3</span>. At what time does the turning moment equal zero',
        a : '2s',
        b : '5s',
        c : '6s',
        d : '4s',
        name : 'twentyfive'
        // e : '4s'
    },
    {
        qt : 'Two point masses of m<sub>1</sub> = 20kg and m<sub>2</sub> = 30kg are held one metre apart. Calculate the moment of inertia about an axis 40cm from m<sub>2</sub>',
        a : '14kgm<sup>2</sup>',
        b : '20kgm<sup>2</sup>',
        c : '30kgm<sup>2</sup>',
        d : '12kgm<sup>2</sup>',
        name : 'twentysix'
        // e : '10kgm<sup>2</sup>'
    },
    {
        qt : 'Rigid body is a body for which the distance between any points is',
        a : 'infinite',
        b : 'finite',
        c : 'Variable',
        d : 'Invariable',
        e : 'Uncertain',
        name : 'twentyseven'
    },
    {
        qt : 'An engine of a car produce a force of 300N when moving at 30ms<sup>-1</sup>. Calculate the power of the engine',
        a : '1.00 x 10<sup>2</sup>W',
        b : '3.00 x 10<sup>4</sup>W',
        c : '9.00 x 10<sup>4</sup>W',
        d : '3.00 x 10<sup>5</sup>W',
        e : '1.50 x 10<sup>2</sup>W',
        name : 'twentyeight'
    },
    {
        qt : 'An engine of a car produce a force of 300N when moving at 30ms<sup>-1</sup>. Calculate the power of the engine',
        a : '1.00 x 10<sup>2</sup>W',
        b : '3.00 x 10<sup>4</sup>W',
        c : '9.00 x 10<sup>4</sup>W',
        d : '3.00 x 10<sup>5</sup>W',
        // e : '1.50 x 10<sup>2</sup>W'
        name : 'twentynine'
    }
];

// console.log(qts);
// loop through question
let curTime = document.getElementsByClassName('timer')[0];
let box = document.querySelector('.next-box');
function getQuestions(arr){
    // arr.forEach(function(ar, i, oriarr){
        
    // });
    let l = 1;
    qts.forEach((phaseitem, i)=>{
        box.innerHTML += `
            <form class='questions'>
                <label for = "${i}">${l++}. ${phaseitem.qt}</label>
                <div class = 'options'>
                    <input type = 'radio' name = '${phaseitem.name}' id = '${phaseitem.a}' value = '${phaseitem.a}'>
                    <label for = "${phaseitem.a}">${phaseitem.a}</label>
                    <br>
                    <input type = 'radio' name = '${phaseitem.name}' id = '${phaseitem.b}' value = '${phaseitem.b}'>
                    <label for = "${phaseitem.b}">${phaseitem.b}</label>
                    <br>
                    <input type = 'radio' name = '${phaseitem.name}' id = '${phaseitem.c}' value = '${phaseitem.c}'>
                    <label for = "${phaseitem.c}">${phaseitem.c}</label>
                    <br>
                    <input type = 'radio' name = '${phaseitem.name}' id = '${phaseitem.d}' value = '${phaseitem.d}'>
                    <label for = "${phaseitem.d}">${phaseitem.d}</label>
                </div>
            </form>
        `;
    })
}
getQuestions(qts);  
let rightAns = ['inertial reference frame','zero','1.60J','maximum','remains constant','resonance','4.00ms<sup>-2</sup>','inertia','a <span>&omega;<sup>2</sup></span>y','acceleration','0.5','120N','40Nm','2.14m','Tycho Brahe','couple','2.00','L<sup>3</sup>M<sup>-1</sup>T<sup>-2</sup>','2.17m','rads<sup>-2</sup>','stress/strain','force/length','Torque','1/2I<span>&omega;<sup>2</sup></span>','4s','12kgm<sup>2</sup>','finite','9.00 x 10<sup>4</sup>W','9.00 x 10<sup>4</sup>W'];

const labels = document.querySelectorAll('.options label');
const values = Array.from(document.querySelectorAll('.options input'));
console.log(values[0].value, rightAns.length);
const actions = Array.from(document.getElementsByTagName('button'));
console.log(actions);
const submit = actions[1];
let score = 0;
let parent = document.querySelectorAll('.options');
console.log(parent)

function time(){
    let starttime, hr, mins, secs;
    hr  = 0, mins = 30, secs = 0;
    let runTime = setInterval(()=>{
        secs++;
        if(secs === 60){
            mins--;
            secs -= 60;
        }if(mins === 0 || actions[1].title === 'you have submitted'){
                actions[1].style.display = 'none';
                document.getElementsByClassName('next-box')[0].style.display = 'none';
                clearInterval(runTime)
            }
        curTime.textContent = `${mins}mins : ${secs}secs`;
    },1000);
    actions[0].remove();
}
actions[0].addEventListener('click', time, 0)
submit.onclick = function(e){
    actions[1].title = 'you have submitted';
    document.querySelector('#done').style.display = 'none';
    actions[0].style.display = 'none';
    actions[1].style.display = 'none';
    e.preventDefault();
    // const userAns = [form.one.value, form.two.value, form.three.value, form.four.value, form.five.value, form.six.value, form.seven.value, form.eight.value, form.nine.value, form.ten.value, form.eleven.value, form.twelve.value, form.thirteen.value, form.fourteen.value, form.fifteen.value, form.sixteen.value, form.seventeen.value, form.eighteen.value, form.nineteen.value, form.twenty.value, form.twentyone.value, form.twentytwo.value, form.twentythree.value, form.twentyfour.value, form.twentyfive.value, form.twentysix.value, form.twentyseven.value, form.twentyeight.value,form.twentynine.value]
    values.forEach((val, i)=>{
        if(val.checked){
            // if(val.value === rightAns[i]){
            //     console.log(val.value);
            // }
           rightAns.forEach((ans, i)=>{
               if(ans === val.value){
                //    console.log('done')
                score += 3.45;
                
               }
           })
        }
    })
        document.getElementsByClassName('next-box')[0].style.display = 'none';
    
    // document.getElementsByClassName('timer')[0].innerHTML = `${00}hr : ${00}mins : ${00}secs`;
    let counter = 0;
    const display = document.querySelector('.score');
                const timer = setInterval(()=>{
                    display.firstElementChild.textContent = `${counter}%`;
                    if(counter === Math.round(score)){
                        clearInterval(timer);
                        // console.log();
                    } else {
                        counter++;
                    }
                }, 10);
};
// curTime.textContent = `${hr}hr : ${mins}mins : ${secs}secs`;


// function submitFun(){
//     document.querySelector('.next-box').style.display = 'none';
// }
document.querySelector('#done').addEventListener('click', function(){
    window.scrollTo(0,0);
    console.log('done');
},0);