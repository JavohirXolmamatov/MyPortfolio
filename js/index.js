document.getElementById('download-btn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'public/MyResume'; // Rezyume fayl manzili
    link.download = 'MyResume.pdf'; // Yuklab olinadigan fayl nomi
    link.click();
  });
  