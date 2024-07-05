import { Request, Response } from "express";
import * as drugService from "../services/drugService.ts";

export const createDrug = async (req: Request, res: Response) => {
  try {
    const drug = await drugService.createDrug(req.body);
    res.status(201).send(drug);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
};

export const getAllDrugs = async (req: Request, res: Response) => {
  try {
    const { name, page, limit } = req.query;
    const drug = await drugService.getAllDrugs(
      {
        name: name as string,
      },
      Number(page),
      Number(limit)
    );
    res.status(200).send({
      data: drug,
    });
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
};

export const getDrugById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const drug = await drugService.getDrugById(Number(id));
    res.status(200).send({
      data: drug,
    });
  } catch (error: any) {
    res.status(404).send({
      error: error.message,
    });
  }
};

export const updateDrug = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const drug = await drugService.updateDrug(Number(id), req.body);
    res.status(201).send({
      data: drug,
    });
  } catch (error: any) {
    res.status(404).send({
      error: error.message,
    });
  }
};

export const deleteDrug = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const drug = await drugService.deleteDrug(Number(id));
    res.status(201).send({
      data: drug,
    });
  } catch (error: any) {
    res.status(404).send({
      error: error.message,
    });
  }
};
