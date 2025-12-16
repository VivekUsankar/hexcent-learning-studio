    const getOtpBtn = document.getElementById("getOtpBtn");
    const otpBox = document.getElementById("otpBox");
    const submitBtn = document.getElementById("submitBtn");
    const emailInput = document.getElementById("emailInput");
    const otpInput = document.getElementById("otpInput");
    const successMsg = document.getElementById("successMsg");
    const otpError = document.getElementById("otpError");

    // GET OTP click
    getOtpBtn.addEventListener("click", () => {
        otpBox.style.display = "block";
        submitBtn.style.display = "block";
        successMsg.style.display = "block";

        emailInput.disabled = true; // disable email/phone
        getOtpBtn.style.display = "none"; // hide button
    });

    // OTP validation on submit
    document.getElementById("otpForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const otpValue = otpInput.value.trim();

        if (!/^\d{6}$/.test(otpValue)) {
            otpError.style.display = "block";
            return;
        }

        otpError.style.display = "none";
        alert("OTP Verified Successfully"); // replace with backend call
    });
