const text = "استعد للانغماس في عوالم جديدة بالعربية!";
const loadingTextElement = document.querySelector(".loading-text");

if (loadingTextElement) {
  let index = 0;
  function typeText() {
    if (index < text.length) {
      loadingTextElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeText, 40);
    }
  }

  window.addEventListener("load", () => {
    typeText();
    setTimeout(() => {
      document.getElementById("loader").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.body.style.overflow = "auto";
      }, 1000);
    }, 1999);
  });
}
function scrollToTeam() {
  document
    .getElementById("about-section")
    .scrollIntoView({ behavior: "smooth" });
}

const cursorDot = document.createElement("div");
cursorDot.classList.add("cursor-dot");
document.body.appendChild(cursorDot);

// تحديث موقع النقطة بحيث تتبع المؤشر بتدرج
document.addEventListener("mousemove", (event) => {
  // ضبط الموقع بإضافة انتقال سلس
  cursorDot.style.left = event.pageX + "px";
  cursorDot.style.top = event.pageY + "px";
});

function showAnimation(event, url) {
  event.preventDefault(); // يمنع الانتقال الفوري
  const card = event.currentTarget.closest(".game-card-wrapper");
  card.classList.add("clicked"); // تفعيل أنيميشن النقر على البطاقة

  setTimeout(() => {
    document.body.classList.add("fade-out"); // إضافة تأثير التلاشي للصفحة
    setTimeout(() => {
      window.location.href = url; // الانتقال بعد انتهاء الأنيميشن
    }, 1000); // وقت التلاشي التدريجي (1 ثانية)
  }, 500); // وقت أنيميشن النقر (نصف ثانية)
}

// التحقق مما إذا كان المستخدم قد زار الصفحة مسبقًا
window.addEventListener("pageshow", (event) => {
  // إذا كانت الصفحة تسترجع من الـ cache، يتم إعادة تحميل الصفحة
  if (
    event.persisted ||
    performance.getEntriesByType("navigation")[0].type === "back_forward"
  ) {
    window.location.reload();
  }
});

// زر العودة لأعلى الصفحة
window.onscroll = function () {
  const topButton = document.getElementById("back-to-top");
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//Contact
// إضافة دالة sendEmail لإرسال البريد الإلكتروني
function sendEmail(event) {
  event.preventDefault();

  emailjs
    .sendForm(
      "service_vwdgcap", // معرّف الخدمة
      "template_1ui072j", // معرّف القالب
      document.getElementById("contact-form")
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message. Please try again.");
      }
    );
}



// منع استخدام الزر الأيمن للماوس
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

function copyDiscordUsername(username) {
  // إنشاء عنصر input مؤقت لنسخ اسم المستخدم
  const tempInput = document.createElement("input");
  tempInput.value = username; // نستخدم المتغير المرسل كاسم المستخدم
  document.body.appendChild(tempInput);

  // تحديد النص داخل input
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // للهواتف

  // نسخ النص
  document.execCommand("copy");

  // إزالة عنصر input بعد النسخ
  document.body.removeChild(tempInput);
}

function copyToClipboard(username) {
// إنشاء عنصر مؤقت لنسخ النص
const tempInput = document.createElement("input");
tempInput.value = username;
document.body.appendChild(tempInput);
tempInput.select();
document.execCommand("copy");
document.body.removeChild(tempInput);

// عرض رسالة تأكيد النسخ
alert("تم نسخ اسم المستخدم: " + username);
}



function showCopyNotification() {
const notification = document.getElementById("copy-notification");
notification.classList.add("show");

setTimeout(() => {
notification.classList.remove("show");
}, 2000); // الإشعار سيختفي بعد ثانيتين
}

function copyDiscordUsername(username) {
navigator.clipboard.writeText(username).then(() => {
const notification = document.getElementById("copy-notification");
notification.style.display = "block";
notification.style.opacity = "1";
setTimeout(() => {
notification.style.opacity = "0";
setTimeout(() => {
  notification.style.display = "none";
}, 500);
}, 2000);
});
}



document.addEventListener('keydown', function(event) {
// تعطيل مفتاح F12
if (event.key === 'F12') {
  event.preventDefault();
}

// تعطيل اختصارات أخرى مثل Ctrl+Shift+I
if (event.ctrlKey && event.shiftKey && event.key === 'I') {
  event.preventDefault();
}

// تعطيل اختصار F12 مع Ctrl
if (event.ctrlKey && event.key === 'F12') {
  event.preventDefault();
}
});


// ارسال الاميلات
// قم بتهيئة EmailJS باستخدام مفتاح الـ Public Key الخاص بك
emailjs.init("nVvNlLzAFTC6BqZ0o"); // استخدم مفتاح الـ Public Key الذي حصلت عليه

// الدالة التي تُرسل البريد الإلكتروني عند إرسال النموذج
function sendEmail(event) {
  event.preventDefault(); // لمنع إعادة تحميل الصفحة عند إرسال النموذج

  // الحصول على البيانات من النموذج
  const fromName = document.getElementById("user_name").value;
  const emailId = document.getElementById("user_email").value;
  const message = document.getElementById("message").value;

  // إرسال البريد الإلكتروني باستخدام EmailJS
  emailjs.send('service_uta5w4g', 'template_oet7ib5', {
    from_name: fromName,
    email_id: emailId,
    message: message
  })
  .then(function(response) {
    // إذا تم الإرسال بنجاح
    alert('تم إرسال الرسالة بنجاح! شكرًا لتواصلك معنا.');
    document.getElementById("contact-form").reset(); // إعادة تعيين النموذج
  }, function(error) {
    // إذا حدث خطأ
    alert('حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى لاحقًا.');
    console.log('Error:', error);
  });
}


  