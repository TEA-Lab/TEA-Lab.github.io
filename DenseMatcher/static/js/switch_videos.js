function loadContent(humanContent1, humanContent2, robotContent, caption, isImage = false) {
    const leftColumn = document.getElementById('left-videos');
    const rightColumn = document.getElementById('right-videos');
    const taskCaption = document.getElementById('task-caption');
  
    // Clear existing content
    leftColumn.innerHTML = '';
    rightColumn.innerHTML = '';


    if (isImage) {
        // Add labels and videos/images to the left-videos column
        const templateLabel = document.createElement('h6');
        templateLabel.textContent = 'Template (With Pre-labelled Keypoints)';
        const humanImage1 = document.createElement('img');
        humanImage1.setAttribute('src', humanContent1);
        humanImage1.setAttribute('width', '100%');
        humanImage1.setAttribute('height', 'auto');
        leftColumn.appendChild(humanImage1);
        leftColumn.appendChild(templateLabel);
        const targetLabel = document.createElement('h6');
        targetLabel.textContent = 'Target';
        const humanImage2 = document.createElement('img');
        humanImage2.setAttribute('src', humanContent2);
        humanImage2.setAttribute('width', '100%');
        humanImage2.setAttribute('height', 'auto');
        leftColumn.appendChild(humanImage2);
        leftColumn.appendChild(targetLabel);
    } else {
        const humanVideo1 = document.createElement('video');
        humanVideo1.setAttribute('autoplay', '');
        humanVideo1.setAttribute('controls', '');
        humanVideo1.setAttribute('muted', '');
        humanVideo1.setAttribute('loop', '');
        humanVideo1.setAttribute('playsinline', '');
        humanVideo1.setAttribute('width', '100%');
        humanVideo1.setAttribute('height', 'auto');
        const humanSource1 = document.createElement('source');
        humanSource1.setAttribute('src', humanContent1);
        humanSource1.setAttribute('type', 'video/mp4');
        humanVideo1.appendChild(humanSource1);
        leftColumn.appendChild(humanVideo1);

        if (humanContent2 !== null) {
            const humanVideo2 = document.createElement('video');
            humanVideo2.setAttribute('autoplay', '');
            humanVideo2.setAttribute('controls', '');
            humanVideo2.setAttribute('muted', '');
            humanVideo2.setAttribute('loop', '');
            humanVideo2.setAttribute('playsinline', '');
            humanVideo2.setAttribute('width', '100%');
            humanVideo2.setAttribute('height', 'auto');
            const humanSource2 = document.createElement('source');
            humanSource2.setAttribute('src', humanContent2);
            humanSource2.setAttribute('type', 'video/mp4');
            humanVideo2.appendChild(humanSource2);
            leftColumn.appendChild(humanVideo2);
        }
    }

    // Create and append robot video
    const robotVideo = document.createElement('video');
    robotVideo.setAttribute('controls', '');
    robotVideo.setAttribute('playsinline', '');
    robotVideo.setAttribute('width', '100%');
    robotVideo.setAttribute('height', 'auto');
    const robotSource = document.createElement('source');
    robotSource.setAttribute('src', robotContent);
    robotSource.setAttribute('type', 'video/mp4');
    robotVideo.appendChild(robotSource);
    rightColumn.appendChild(robotVideo);

    // Set the task caption
    taskCaption.innerHTML = caption;
}

  // Event listeners for the buttons
  document.getElementById('load-banana').addEventListener('click', () => {
    loadContent(
      './static/our_videos/human_video/new_banana.mp4',
      null,
      './static/our_videos/robot_video/new_banana_robot1.mp4',
      'Peeling a Banana'
    );
  });
  
  document.getElementById('load-carrot').addEventListener('click', () => {
    loadContent(
      './static/our_videos/human_video/new_carrot.mp4',
      './static/our_videos/human_video/new_kettle.mp4',
      './static/our_videos/robot_video/new_Carrot_robot_1_2x.mp4',
      'Watering Carrots'
    );
  });
  
  document.getElementById('load-flower').addEventListener('click', () => {
    loadContent(
      './static/our_videos/human_video/new_flower_human_video.mp4',
      null,
      './static/our_videos/robot_video/new_flower_robot_1.mp4',
      'Putting Flowers into a Vase'
    );
  });
  
  document.getElementById('load-tree').addEventListener('click', () => {
    loadContent(
      './static/our_videos/human_video/new_tree.mp4',
      null,
      './static/our_videos/robot_video/new_Christmas_robot1.mp4',
      'Decorating a Christmas Tree'
    );
  });
  
  document.getElementById('load-shoes').addEventListener('click', () => {
    loadContent(
      './static/our_videos/human_video/new_shoes.mp4',
      null,
      './static/our_videos/robot_video/new_shoes_robot_1.mp4',
      'Organizing Shoes'
    );
  });
  
  document.getElementById('load-dog').addEventListener('click', () => {
    loadContent(
      './static/our_videos/dog/Picture1.png',
      './static/our_videos/dog/color2.png',
      './static/our_videos/robot_video/new_long_5x.mp4',
      'Transferring Pre-labelled Keypoints to New Objects and Poking Them with a Pen',
      true
    );
  });