---
layout: layouts/post.njk
title: "Running RISC-V on FPGA: A Complete Guide"
description: "Learn how to implement and run a RISC-V processor on an FPGA using open source tools"
date: 2025-10-26
tags: ["risc-v", "fpga", "vexriscv", "litex"]
---

# Running RISC-V on FPGA: A Complete Guide

Combining RISC-V with FPGAs opens up incredible possibilities for custom processor design, hardware acceleration, and embedded systems development. This guide shows you how to get a RISC-V processor running on an FPGA using entirely open source tools.

## Why RISC-V on FPGA?

- **Customization**: Modify the processor to your exact needs
- **Learning**: Understand processor architecture hands-on
- **Prototyping**: Test custom instructions and accelerators
- **Cost-effective**: No licensing fees for either RISC-V or open source tools
- **Integration**: Combine CPU with custom hardware peripherals

## Popular Open Source RISC-V Cores

### 1. VexRiscv
- Written in SpinalHDL (generates Verilog)
- Highly configurable
- Good performance
- Excellent for embedded applications

### 2. PicoRV32
- Compact, simple design
- Pure Verilog
- Great for learning
- Fits in small FPGAs

### 3. NEORV32
- Full-featured processor system
- RISC-V compliant
- Rich peripheral set
- Excellent documentation

### 4. Rocket Chip
- High-performance design
- Used in commercial products
- Chisel-based (generates Verilog)
- More complex, requires more resources

## Quick Start: PicoRV32 on iCE40 FPGA

### Prerequisites

```bash
# Install open source FPGA tools
sudo apt install yosys nextpnr-ice40 icestorm

# Install RISC-V toolchain
sudo apt install gcc-riscv64-unknown-elf
```

### Get PicoRV32

```bash
git clone https://github.com/YosysHQ/picorv32.git
cd picorv32
```

### Build for iCE40 HX8K

```bash
cd picorv32/scripts/icestorm
make hx8kdemo
```

### Program the FPGA

```bash
iceprog hx8kdemo.bin
```

## Using LiteX for RISC-V SoC Design

LiteX is a powerful framework for building RISC-V SoCs on FPGAs.

### Install LiteX

```bash
wget https://raw.githubusercontent.com/enjoy-digital/litex/master/litex_setup.py
chmod +x litex_setup.py
./litex_setup.py --init --install --user
```

### Build a VexRiscv SoC

```python
#!/usr/bin/env python3
from litex.soc.integration.builder import Builder
from litex.soc.cores.cpu.vexriscv import VexRiscv
from litex_boards.platforms import colorlight_5a_75b
from litex.soc.integration.soc_core import SoCCore

# Create platform
platform = colorlight_5a_75b.Platform()

# Create SoC with VexRiscv CPU
soc = SoCCore(
    platform=platform,
    cpu_type="vexriscv",
    clk_freq=25e6,
    integrated_rom_size=0x8000,
    integrated_sram_size=0x2000,
)

# Build
builder = Builder(soc, output_dir="build")
builder.build()
```

### Run the build:

```bash
python3 soc.py
```

## Compiling Software for Your RISC-V FPGA

### Simple Bare-Metal Program

```c
// main.c
#define UART_BASE 0x82000000

void uart_putc(char c) {
    volatile unsigned int *uart = (unsigned int *)UART_BASE;
    *uart = c;
}

void uart_puts(const char *s) {
    while (*s) {
        uart_putc(*s++);
    }
}

int main() {
    uart_puts("Hello from RISC-V on FPGA!\n");
    
    while (1) {
        // Your code here
    }
    
    return 0;
}
```

### Compile and Link

```bash
riscv64-unknown-elf-gcc -march=rv32i -mabi=ilp32 -nostdlib \
    -T linker.ld -o firmware.elf main.c

riscv64-unknown-elf-objcopy -O binary firmware.elf firmware.bin
```

### Load into FPGA

```bash
# Using LiteX
litex_term /dev/ttyUSB0 --kernel firmware.bin
```

## Running Zephyr on RISC-V FPGA

Zephyr supports several RISC-V FPGA platforms:

```bash
# Build Zephyr for LiteX VexRiscv
cd ~/zephyrproject/zephyr
west build -b litex_vexriscv samples/hello_world

# Generate binary
west build -t bin

# Load to FPGA
litex_term /dev/ttyUSB0 --kernel build/zephyr/zephyr.bin
```

## Performance Optimization

### 1. Enable Instruction Cache
```python
# In LiteX SoC
soc = SoCCore(
    cpu_type="vexriscv",
    cpu_variant="linux",  # Includes caches
    # ...
)
```

### 2. Add Hardware Multiplier
```python
# VexRiscv with M extension
cpu_type="vexriscv",
cpu_variant="standard+m",
```

### 3. Optimize Clock Frequency
- Use PLL to increase clock speed
- Balance between speed and timing closure
- Monitor temperature

## Debugging RISC-V on FPGA

### Using JTAG with OpenOCD

```bash
# OpenOCD configuration for VexRiscv
openocd -f interface/ftdi/digilent-hs1.cfg \
        -f target/vexriscv.cfg

# In another terminal, connect GDB
riscv64-unknown-elf-gdb firmware.elf
(gdb) target remote localhost:3333
(gdb) load
(gdb) continue
```

### Using UART for Debug Output

```c
#define DEBUG_PRINT(x) uart_puts(x)

void debug_hex(unsigned int val) {
    char buf[9];
    for (int i = 7; i >= 0; i--) {
        buf[i] = "0123456789ABCDEF"[val & 0xF];
        val >>= 4;
    }
    buf[8] = '\0';
    uart_puts(buf);
}
```

## Adding Custom Instructions

One of the best features of RISC-V on FPGA is adding custom instructions:

```verilog
// Custom instruction example in VexRiscv plugin
case(instruction) {
    M"0000000----------000-----0001011" -> List(
        INSTRUCTION_READY -> True,
        REGFILE_WRITE_VALID -> True,
        BYPASSABLE_EXECUTE_STAGE -> True,
        BYPASSABLE_MEMORY_STAGE -> True,
        RS1_USE -> True,
        RS2_USE -> True
    )
}
```

## Recommended FPGA Boards

### Budget-Friendly
- **Colorlight 5A-75B** (~$15) - ECP5, great value
- **iCEBreaker** (~$100) - iCE40, excellent for learning

### Mid-Range
- **ULX3S** (~$130) - ECP5, open hardware
- **OrangeCrab** (~$100) - ECP5, tiny form factor

### Advanced
- **Arty A7** (~$200) - Xilinx 7-series
- **Nexys A7** (~$400) - Xilinx 7-series, more resources

## Next Steps

- Experiment with different RISC-V cores
- Add custom peripherals (SPI, I2C, PWM)
- Implement hardware accelerators
- Try running Linux on larger FPGAs
- Design your own RISC-V extensions

## Resources

- [PicoRV32](https://github.com/YosysHQ/picorv32)
- [VexRiscv](https://github.com/SpinalHDL/VexRiscv)
- [LiteX](https://github.com/enjoy-digital/litex)
- [NEORV32](https://github.com/stnolting/neorv32)
- [RISC-V on FPGA Workshop](https://github.com/riscv/riscv-workshop)

Building RISC-V processors on FPGAs is an exciting way to learn about computer architecture while creating custom hardware solutions. Start simple, experiment, and have fun!

