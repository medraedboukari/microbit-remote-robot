# 🤖 Micro:bit Radio-Controlled Robot (Compatible V1 & V2)

This project demonstrates how to build a simple remote-controlled robot using **two BBC Micro:bit boards** and a **motor driver module** (L9110S or TB6612FNG). The two Micro:bit boards communicate wirelessly using the **built-in radio module**.

---

## 🧰 Hardware Requirements

| Quantity | Component                    |
|----------|------------------------------|
| 2        | Micro:bit (V1 or V2)         |
| 1        | Motor driver (L9110S or TB6612FNG) |
| 2        | DC motors                    |
| 1        | Robot chassis (optional)     |
| 1        | Battery pack for motors (4xAA or Li-ion 6V) |
| 1        | Battery holder for Micro:bit |
| Jumper wires | For connections          |

---

## 🔌 Wiring Diagram Example (L9110S driver)

| Micro:bit Pin | L9110S Pin |
|---------------|------------|
| P0            | IA1        |
| P1            | IB1        |
| P2            | IA2        |
| P8            | IB2        |
| 3V            | VCC        |
| GND           | GND        |

> ⚠️ Use an external power supply (4xAA or 6V Li-ion) for the motors.  
> Make sure **GND of Micro:bit, driver, and battery are connected together**.

---

## 🧠 Project Overview

- **Micro:bit 1 (Remote)**: Sends commands over radio using button presses.
- **Micro:bit 2 (Robot)**: Receives radio signals and controls motors accordingly.

---

## 🎮 Remote Controller Code (Micro:bit 1)

Press buttons to send direction commands:

- **A** → move forward
- **B** → move backward
- **A+B** → stop
