export const FooterSection = ({ links }) => {
  //   console.log(links);

  return (
    <>
      <h6>{links.title}</h6>
      <ul style={{ listStyleType: "none" }}>
        {links.content.map((item, index) => {
          return (
            <li key={index}>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "gray",
                }}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
