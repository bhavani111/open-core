---
layout: layouts/base.njk
title: "Getting Started with RISC-V Development"
description: "A beginner's guide to setting up a RISC-V development environment and running your first program"
date: 2025-10-20
tags: ["risc-v", "tutorial", "toolchain"]
---

# Getting Started with RISC-V Development

RISC-V is an open standard instruction set architecture (ISA) that's revolutionizing processor design. Unlike proprietary architectures, RISC-V is free to use, modify, and implement, making it perfect for both education and commercial applications.

## Why RISC-V?

- **Open Source**: No licensing fees or restrictions
- **Modular**: Choose only the extensions you need
- **Modern**: Designed with lessons learned from decades of processor evolution
- **Growing Ecosystem**: Increasing hardware and software support

## Setting Up Your Toolchain

### Installing the RISC-V GNU Toolchain

On Ubuntu/Debian:

```bash
sudo apt-get install gcc-riscv64-unknown-elf
sudo apt-get install qemu-system-riscv64
```

Or build from source for the latest features:

```bash
git clone https://github.com/riscv/riscv-gnu-toolchain
cd riscv-gnu-toolchain
./configure --prefix=/opt/riscv --with-arch=rv32gc --with-abi=ilp32d
make
```

### Your First RISC-V Program

Create a simple "Hello World" program:

```c
#include <stdio.h>

int main() {
    printf("Hello from RISC-V!\n");
    return 0;
}
```

Compile it:

```bash
riscv64-unknown-elf-gcc -o hello hello.c
```

Run it in QEMU:

```bash
qemu-riscv64 hello
```

## Next Steps

- Explore different RISC-V extensions (M, A, F, D, C)
- Try bare-metal programming
- Experiment with RISC-V on FPGA
- Contribute to RISC-V open source projects

## Resources

- [RISC-V International](https://riscv.org/)
- [RISC-V ISA Specification](https://github.com/riscv/riscv-isa-manual)
- [Awesome RISC-V](https://github.com/drom/awesome-riscv)

Stay tuned for more RISC-V tutorials!

