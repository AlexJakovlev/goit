function Layout({ title, children }) {
  return (
    <div className="App">
      {title && <h2 className="main_title">{title}</h2>}
      {children}
    </div>
  );
}

export default Layout;
