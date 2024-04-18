document.addEventListener("DOMContentLoaded", function() {
    var skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(function(skillBar) {
        var percent = skillBar.getAttribute('data-percent');
        skillBar.innerHTML = '<div class="skill-bar-fill" style="width: ' + percent + '%"></div>';
    });
  });
  