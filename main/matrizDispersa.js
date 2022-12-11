class NodoMatriz {
    constructor(x, y, obj) {
        this.next = null;
        this.prev = null;
        this.up = null;
        this.down = null;

        this.x = x;
        this.y = y;
        this.obj = obj;
    }
}

class NodoHeader {
    constructor(pos) {
        this.next = null;
        this.prev = null;

        this.access = null;

        this.pos = pos;
    }
}