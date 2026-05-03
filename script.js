* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Playfair Display', serif;
  background: linear-gradient(135deg, #eaf3ff, #d6e6ff);
  color: #1a1a1a;
  overflow-x: hidden;
}

/* CENTER EVERYTHING */
section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  text-align: center;
}

/* INTRO */
.intro {
  height: 100vh;
  background: linear-gradient(135deg, #dce9ff, #c7dcff);
  cursor: pointer;
}

.intro img {
  width: 120px;
  margin-bottom: 20px;
}

/* HERO */
.hero {
  min-height: 100vh;
}

.hero h1 {
  font-size: 32px;
}

.hero p {
  margin-top: 10px;
}

.tamil {
  font-family: 'Noto Sans Tamil';
  margin-top: 10px;
  color: #555;
}

/* CARDS */
.card {
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin: 20px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

/* GALLERY */
.gallery {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery img {
  width: 45%;
  border-radius: 15px;
}

/* MAP */
iframe {
  width: 100%;
  height: 250px;
  border: 0;
  border-radius: 15px;
  margin-top: 10px;
}

/* PARTICLES */
.particles {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.particles span {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(0, 102, 255, 0.3);
  border-radius: 50%;
  animation: float 10s linear infinite;
}

@keyframes float {
  0% { transform: translateY(100vh); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(-10vh); opacity: 0; }
}

.hidden {
  display: none;
}
