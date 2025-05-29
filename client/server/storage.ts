import { leads, type Lead, type InsertLead } from "@shared/schema";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  getLeadById(id: number): Promise<Lead | undefined>;
}

export class MemStorage implements IStorage {
  private leads: Map<number, Lead>;
  private currentId: number;

  constructor() {
    this.leads = new Map();
    this.currentId = 1;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = this.currentId++;
    const lead: Lead = {
      ...insertLead,
      id,
      createdAt: new Date()
    };
    this.leads.set(id, lead);
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    return Array.from(this.leads.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getLeadById(id: number): Promise<Lead | undefined> {
    return this.leads.get(id);
  }
}

export const storage = new MemStorage();
