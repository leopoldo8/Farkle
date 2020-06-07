import API from '../index';

class RoomService extends API {
  constructor() {
    super(API);
  }

  create(room) {
    return this.post('/room/create', room);
  }

  enter(enterRoomData) {
    return this.post('/room/enter', enterRoomData);
  }

  getRoom(roomId) {
    return this.get(`/room/${roomId}`);
  }
}

export default new RoomService();
