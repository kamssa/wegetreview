import {PersonneModel} from '../personne/personne-model';

export class MembreModel extends PersonneModel {
    public bannir() {
        super.bannir();
    }
    public restaurer() {
        super.restaurer();
    }
    public activer() {
        super.activer();
    }
    public suspendre() {
        super.suspendre();
    }
    public enAttente() {
        super.enAttente();
    }
}