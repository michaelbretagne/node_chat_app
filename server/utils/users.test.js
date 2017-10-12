const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

	var users;

	beforeEach(() => {
		users = new Users();

		users.users = [{
			id: '1',
			name: 'Manu',
			room: 'Breizh room'
		}, {
			id: '2',
			name: 'Mat',
			room: 'Festival room'
		}, {
			id: '3',
			name: 'Tony',
			room: 'Breizh room'
		}]
	});

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Mike',
			room: 'SF room club'
		};

		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should remove a user', () => {
		var user = users.removeUser('1');
		expect(user.id).toBe('1');
		expect(users.users).toHaveLength(2);
	});

	it('should not remove a user', () => {
		var user = users.removeUser('4');
		expect(user).toBeUndefined()
		expect(users.users).toHaveLength(3);
	});

	it('should find a user', () => {
		var user = users.getUser('3');
		expect(user.id).toBe('3');
	});

	it('should not find a user', () => {
		var user = users.getUser('4');
		expect(user).toBeUndefined();
	})

	it('should return names for Breizh room', () => {
		var userList = users.getUserList('Breizh room');

		expect(userList).toEqual(['Manu', 'Tony']);
	});

	it('should return names for festival room', () => {
		var userList = users.getUserList('Festival room');

		expect(userList).toEqual(['Mat']);
	});
});