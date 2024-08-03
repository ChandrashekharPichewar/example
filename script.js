document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: 'Todos Application',
            description: 'Developed persistent todo application with CRUD operations to track a list of tasks.',
            details: [
                'Displayed list of todos with HTML list elements, styled todo list using CSS, Bootstrap.',
                'Implemented todo CRUD operations using JavaScript event listeners and updated UI dynamically using JavaScript DOM operations.',
                'Used Arrays, Objects, and their methods during todo list CRUD Operations, persisted todo list state on page reloads using local storage methods.'
            ],
            link: 'https://chadhrashekar1.ccbp.tech/'
        },
        {
            title: 'Food Munch',
            description: 'Developed a responsive website for a Food Store where users can see a list of food items, detailed information about a food item, and offers.',
            details: [
                'Designed page using HTML structure elements like li, header, article, footer elements, and different Bootstrap components for responsiveness.'
            ],
            link: 'https://chandhufoodm.ccbp.tech/'
        }
    ];

    const projectsContainer = document.querySelector('#projects .container');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        projectDiv.appendChild(projectTitle);

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectDiv.appendChild(projectDescription);

        const projectDetails = document.createElement('ul');
        project.details.forEach(detail => {
            const detailItem = document.createElement('li');
            detailItem.textContent = detail;
            projectDetails.appendChild(detailItem);
        });
        projectDiv.appendChild(projectDetails);

        const projectLink = document.createElement('p');
        const projectAnchor = document.createElement('a');
        projectAnchor.href = project.link;
        projectAnchor.target = '_blank';
        projectAnchor.textContent = 'View Project';
        projectLink.appendChild(projectAnchor);
        projectDiv.appendChild(projectLink);

        projectsContainer.appendChild(projectDiv);
    });
});
