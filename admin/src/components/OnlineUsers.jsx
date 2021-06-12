import React from "react";

/**
 * @author
 * @function OnlineUsers
 **/

const OnlineUsers = (props) => {
  const { onUserSelect, users, username, checkUnseenMessages } = props;

  return (
		<div>
			<div className="online-users-header">
				<div style={{ margin: "0 10px" }}>Online Users</div>
			</div>
			<ul className="users-list">
				<li>
				<span style={{ textTransform: "capitalize" }}>Prasad</span>
					<span className="new-message-count">
						2
					</span>				
				</li>	
			</ul>
		</div>
  );
};

export default OnlineUsers;