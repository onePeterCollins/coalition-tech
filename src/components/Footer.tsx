const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container flex items-center justify-between flex-col sm:flex-row gap-4">
        <div className="flex gap-4">
          <img
            src="/images/vector_smart_object.png"
            alt=""
            width={43}
            height={43}
          />
          <img
            src="/images/losangeles_mountains.png"
            alt=""
            width={110}
            height={43}
          />
        </div>
        <p className="text-secondary">
          Copyright {new Date().getFullYear()}. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
