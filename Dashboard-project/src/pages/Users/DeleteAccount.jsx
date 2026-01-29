export function DeleteAccount() {
  return (
    <div className="delete-account-page my-5 ">   
        <h2 className="text-xl">Delete Account</h2>
        <p className="text-xl">Are you sure you want to delete your account? This action cannot be undone.</p>
        <button className="delete-account-button my-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl ">Delete My Account</button>
    </div>
  );
}