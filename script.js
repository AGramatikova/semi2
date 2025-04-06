const draggables = document.querySelectorAll('.draggable');

draggables.forEach(draggable => {
  draggable.addEventListener('mousedown', dragStart);

  function dragStart(e) {
    let offsetX = e.clientX - draggable.offsetLeft;
    let offsetY = e.clientY - draggable.offsetTop;

    function dragMove(e) {
      draggable.style.left = e.clientX - offsetX + 'px';
      draggable.style.top = e.clientY - offsetY + 'px';
    }

    function dragEnd() {
      document.removeEventListener('mousemove', dragMove);
      document.removeEventListener('mouseup', dragEnd);
    }

    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);
  }
  document.querySelector('.click-me').addEventListener('click', function() {
    const backPhotos = document.querySelector('.back-photos');
    backPhotos.classList.add('spread');
  });
  
});

