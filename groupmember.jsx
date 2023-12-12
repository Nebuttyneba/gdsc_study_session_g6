function groupmember() {
    const groupmember = ['neba', 'nati', 'Mike', 'josi', 'Alex', 'nana', 'Daniel', 'Olivia', 'samri', 'Sophia'];
  
    return (
      <div>
        <h2>Group Members</h2>
        <ul>
          {groupmembers.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default groupmember;