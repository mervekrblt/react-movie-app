const About = () => {
  const tech = ["React", "React-Router-Dom", "Axios", "React", "React-Router-Dom", "Axios"]
  return (
    <>
      <div className="container my-5 border">
        <header className="text-center">
          <h3>TECHNOLOGIES</h3>
        </header>

        <main className="px-3 mt-5 text-center">
          {tech.map(item => (
            <span key={item} className="badge p-3 me-3 btn-lg rounded-pill bg-dark">{item}</span>
          ))}
        </main>
      </div>
    </>
  );
};
export default About;
