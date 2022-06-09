// Project list
const aiSafetyProjects = [
    {
        title: 'Parameters, Compute and Data Trends in Machine Learning',
        subtitle: 'A collaborative project to investigate compute trends in ML since 1952',
        image: "/images/thumbnails/PCD-trends.png",
        link: 'https://www.alignmentforum.org/s/T9pBzinPXYB3mxSGi',
    },
    {
        title: 'AI Takeoff Speeds and Evolution',
        subtitle: 'What role should evolutionary analogies play in understanding takeoff speeds?',
        image: "/images/thumbnails/ai-takeoffs-evolution.jpeg",
        link: 'https://forum.effectivealtruism.org/posts/aSDnzAm85a3Pi87rm/what-role-should-evolutionary-analogies-play-in',
    },
];
    
const eaProjects = [
    {
        title: 'Effective Altruism St Andrews',
        subtitle: 'A website I helped design and set up for my university EA chapter',
        image: "/images/thumbnails/EA-StA-website.png",
        link: 'https://www.eastandrews.org',
    },
    {
        title: 'Data and Information Policy',
        subtitle: 'I co-authored a 2021 national policy document for Students for Global Health UK',
        image: "/images/thumbnails/sfgh-uk.png",
        link: 'https://studentsforglobalhealth.org/policy-statements/',
    }
];

const physicsProjects = [
    {
        title: 'What Is Physical Intuition?',
        subtitle: 'Exploring "physical understanding" in physics - how it helps, and how it could go wrong...',
        image: "/images/2022/phys_metal-rod.png",
        link: '/2022/01/30/what-is-physical-intuition.html',
    },
    {
        title: 'Orbital chaos',
        subtitle: 'Some fooling around in the St Andrews Physics Thinkathon',
        image: "/images/thumbnails/orbital-chaos.png",
        link: 'https://github.com/ansonwhho/orbital-chaos',
    },
    {
        title: 'The Physics of Rainbows',
        subtitle: 'A geometric optics simulation of rainbows',
        image: "/images/thumbnails/rainbows-and-rays.png",
        link: '/2021/01/23/the-physics-of-rainbows.html',
    },
    {
        title: 'PANDA Magazine',
        subtitle: 'Website for the Physics and Astronomy Magazine at St Andrews',
        image: "/images/thumbnails/panda-mag-website.png",
        link: 'https://pandamagazine.wp.st-andrews.ac.uk/',
    },
];

const mathProjects = [
    {
        title: 'Dynamical Billiards',
        subtitle: 'What happens when you play billiards on an elliptical table?',
        image: "/images/thumbnails/dynamical-billiards.png",
        link: '/2021/03/22/dynamical-billiards.html',
    },
];

const csProjects = [
    {
        title: 'Deep Q-Networks',
        subtitle: 'Implementing DQNs for Spinning Up',
        image: "/images/thumbnails/DQN.png",
        link: 'https://github.com/ansonwhho/DQN',
    },
    {
        title: 'Conway\'s Game of Life',
        subtitle: 'A simulation of the Game of Life using Python',
        image: "/images/thumbnails/conway-game-of-life.png",
        link: '/2021/02/04/conways-game-of-life.html',
    },
];

// Vue instances
new Vue({
    el: '#aiSafetyProjects',
    data: aiSafetyProjects
})

new Vue({
    el: '#eaProjects',
    data: eaProjects
})


new Vue({
    el: '#physicsProjects',
    data: {physicsProjects: physicsProjects}
})


new Vue({
    el: '#mathProjects',
    data: mathProjects
})

new Vue({
    el: '#csProjects',
    data: csProjects
})