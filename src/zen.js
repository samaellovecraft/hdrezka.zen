let comments = document.getElementById('hd-comments-list'),
    title = document.getElementById('addcomment-title'),
    form = document.getElementById('comments-form'),
    navigation = document.getElementById('hd-comments-navigation');

function zen() {
  // Удаляет все комментарии на HDrezka.
  comments.remove();
  title.remove();
  form.remove();
  navigation.remove();
}

if (comments || title || form || navigation) zen();
