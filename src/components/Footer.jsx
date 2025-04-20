function Footer() {
  const date = new Date();

  return (
    <footer className="flex justify-center items-center text-white py-4 mb-[50vh]">
      <div className="text-xs text-center">
        <p>
          &copy;{date.getFullYear()}{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-primary"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/SultanFarrel" className="text-primary">
            Sultan Farrel
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
