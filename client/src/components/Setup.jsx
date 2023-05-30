function Setup() {

  return (
    <>
      <h2>Preparation</h2>

      <details>
        <summary>Install</summary>
        <p>Install Hardhat + Nomic's Toolbox globally.</p>
        <code>$ npm install --save-dev hardhat && npm install --save-dev @nomicfoundation/hardhat-toolbox

</code>
      </details>

      <details>
        <summary>Boot a local Hardhat Node</summary>
        <p>
          Open a terminal and run Hardhat's local node, a simulated Ethereum blockchain on your machine.
        </p>
        <code>$ npx hardhat node</code>
        <p>From the list of generated private keys, import the first one to MetaMask.</p>
      </details>

      <details>
        <summary>Hardhat</summary>
        <p>
          Keep the node running and open another terminal. Let's compile and deploy our
          contracts.
        </p>
        <code>
          
          {`$ npx hardhat compile --network development\n`}
          <span className="dim-color">
            # Configure the network(s) you wish to access/deploy on in hardhat.config.js
          </span>
        </code>
      </details>
    </>
  );
}

export default Setup;
