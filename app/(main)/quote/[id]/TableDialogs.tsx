'use client'

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';

interface EditDialogProps {
  isOpen: boolean;
  onClose: () => void;
  data: any[];
  projectId: string;
  onSave: (data: any[], projectId: string) => void;
}

export function ContractEditDialog({ isOpen, onClose, data, projectId, onSave }: EditDialogProps) {
  const [editData, setEditData] = useState(data);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modifica Contratto</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          {editData.map((item, index) => (
            <div key={index} className="grid grid-cols-2 gap-2 items-center">
              <Label>{item.invoice}</Label>
              <Input
                value={item.amount}
                onChange={(e) => {
                  const newData = [...editData];
                  newData[index].amount = parseFloat(e.target.value);
                  setEditData(newData);
                }}
                type="number"
              />
            </div>
          ))}
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>Annulla</Button>
            <Button onClick={() => {
              onSave(editData, projectId);
              onClose();
            }}>Salva</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function FixedCostsEditDialog({
  isOpen,
  onClose,
  data,
  projectId,
  onSave,
}: EditDialogProps) {
  const [editData, setEditData] = useState(data);

  // Funzione per aggiungere una nuova riga
  const addRow = () => {
    setEditData((prevData) => [
      ...prevData,
      { invoice: "", amount: 0 }, // Aggiungi una riga vuota
    ]);
  };

  // Funzione per eliminare una riga
  const removeRow = (index: number) => {
    const newData = editData.filter((_, i) => i !== index);
    setEditData(newData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modifica Costi Fissi</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          {editData.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              <Input
                value={item.invoice}
                onChange={(e) => {
                  const newData = [...editData];
                  newData[index].invoice = e.target.value;
                  setEditData(newData);
                }}
              />
              <Input
                value={item.amount}
                onChange={(e) => {
                  const newData = [...editData];
                  newData[index].amount = parseFloat(e.target.value);
                  setEditData(newData);
                }}
                type="number"
              />
              {/* Tasto Elimina */}
              <Button
                variant="destructive"
                onClick={() => removeRow(index)}
                className='w-5'
              >
                X
              </Button>
            </div>
          ))}
          <Button variant="outline" onClick={addRow}>+</Button>

          <div className="flex justify-end gap-2">
            {/* Tasto Aggiungi riga */}
            
            <Button variant="outline" onClick={onClose}>Annulla</Button>
            <Button
              onClick={() => {
                onSave(editData, projectId);
                onClose();
              }}
            >
              Salva
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
