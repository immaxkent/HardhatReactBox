function Tree() {
  return (
    <code>
      {`.\n`}
      {`├── client`}
      <span className="primary-color">
        {`   # React project (create-react-app)\n`}
      </span>
      {`├── contracts`}
      <span className="primary-color">
        {`  # Hardhat project`}
      </span>
      {`\n`}      
      {`├── scripts`}
      {`\n`}
      {`└── tests`}
    </code>
  );
}

export default Tree;
