function App() {
    const [showModal, setShowModal] = useState(true); // Set to true for testing
  
    return (
      <>
        <Navbar />
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <div className="flex items-center justify-center w-full h-full p-4">
            <img
              src={newyear}
              alt="New Year Poster"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </Modal>
      </>
    );
  }
  
  export default App;
  