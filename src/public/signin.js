document.getElementById("signin").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email);
    const res = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  
    const data = await res.json();
    if (!data.status) {
      alert(data.error);
      return;
    }
    localStorage.setItem("user", JSON.stringify(data.error));
    location.href = "/";
  });