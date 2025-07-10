export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">TEST PAGE WORKS</h1>
        <p className="text-2xl mb-8">If you can see this, deployment is working</p>
        <p className="text-xl">Navigation should have PROPERTY SEARCH</p>
        <p className="text-lg mt-4">Deployed at: {new Date().toISOString()}</p>
      </div>
    </div>
  );
}